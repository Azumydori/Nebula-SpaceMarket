"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import decimal
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, JWTManager
from flask_cors import CORS

from api.models import db, Account, Order, Wishlist, Product, Line_Order

from sqlalchemy import exc
from decimal import Decimal
from datetime import timedelta

from api.utils import generate_sitemap, APIException
from werkzeug.security import check_password_hash, generate_password_hash

import cloudinary
import cloudinary.uploader


api = Blueprint('api', __name__)


@api.route('/account/<int:id>', methods={"GET"})
def get_account_profile(id):
    account = Account.get_by_id(id)

    if account:
        return jsonify(account.to_dict()), 200
    
    return({"error": "Account not found"}), 404
    

@api.route('/account', methods=['POST'])
def create_account(): 

    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)

    if not (first_name and last_name and email and password and username):
        return {"error":"Missing info"}, 400

    new_user = Account(
        email=email,
        first_name=first_name,
        last_name=last_name,
        _password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=16),
        username=username
    )

    try:
        new_user.create()
    except exc.IntegrityError: 
        return {"error":"something went wrong"}, 409

    account = Account.get_by_email(email)


    if account :
        token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(minutes=100))
        return({'token' : token}), 200

    

@api.route('/login', methods=["POST"])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not (email and password):
        return({'error':'Missing info'}), 400

    account = Account.get_by_email(email)

    if account and check_password_hash(account._password, password) and account._is_active:
        token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(minutes=100))
        return({'token' : token}) , 200

    else:
        return({'error':'Some parameter is wrong'}), 400






@api.route('/account/<int:id>', methods = ['PATCH'])
def update_account(id):
    account = Account.get_by_id(id)

    if account:
        account.update_account_status()
        return jsonify(account.to_dict()), 200

    return jsonify({'msg' : 'Account not foud'}), 404


@api.route('/product', methods=['GET'])
def all_product():
    prodc = Product.get_all()

    if prodc:
        products_all = [product.to_dict() for product in prodc]

        return jsonify(products_all), 200

    return jsonify({'error': "Products not found"}), 404


@api.route('/product/<int:id>', methods={"GET"})
def get_one_product(id):
    one_product = Product.get_by_id(id)

    if one_product:
        return jsonify(one_product.to_dict()), 200
    
    return({"error": "Product not found"}), 404

@api.route('/client/<int:product_id>/favorites', methods=['POST'])
@jwt_required()
def add_whish(product_id):
    current_user = get_jwt_identity()
    if not get_jwt_identity().get("id") == id:
        return {'error': 'Invalid action'}, 400

    id_product = request.json.get("have_product", None)

    new_whish = Wishlist(
        from_account = current_user.get("id"),
        have_product =  product_id,
    )

    try:
        new_whish.create()
        return jsonify(new_whish.to_dict())
    except exc.IntegrityError: 
        return {"error":"something went wrong"}, 409

@api.route('/client/<int:id>/favorites', methods=['DELETE'])
@jwt_required()
def remove_wish(id):
    user_with_wish = get_jwt_identity()
    if not get_jwt_identity().get("id") == id:
        return {'error': 'Incorrect user action'}, 400

    current_user = Wishlist.get_by_id(id)
    if current_user:
        current_user.delete()
        return jsonify(current_user.to_dict()), 200

    return {'error': 'traveler not found'}, 400

@api.route('/client/<int:id>/cart', methods=['POST'])
@jwt_required()
def add_item_cart(id):

    if not get_jwt_identity().get("id") == id:
        return {'error': 'Invalid action'}, 400

    id_product = request.json.get("have_product", None)

    new_cart = Line_Order(
        product_id = id_product
    )

    try:
        cart.create()
        return jsonify(cart.to_dict())
    except exc.IntegrityError: 
        return {"error":"something went wrong"}, 409

@api.route('/account/<int:id>', methods=["PATCH"])
@jwt_required()
def change_credentials(id):
    print(get_jwt_identity())
    if not id == get_jwt_identity().get("id"):
        return ({"error":"Changes denied"}), 301

    account = Account.get_by_id(id)
    if account:    
        updated_info = { 
            "city": request.json.get("city", None),
            "state": request.json.get("state", None),
            "country": request.json.get("country", None),
            "address": request.json.get("address", None),
            "username": request.json.get("username", None),
            "email": request.json.get("email", None),
            "first_name": request.json.get("first_name", None),
            "last_name": request.json.get("last_name", None),
        }
        
        
        account_updated = account.update_account_info(** {key: value for key, value in updated_info.items() if value is not None})
        return jsonify(account_updated.to_dict()), 200

    return {"error":"user not found"}, 400


@api.route('/search/<int:category>', methods={"GET"})
def get_products(category):
    one_product = Product.get_category(id)

    if one_product:
        return jsonify(one_product.to_dict()), 200
    
    return({"error": "Product not found"}), 404


@api.route('/productmedia/<int:id>', methods=['POST'])
def update_media_post(id):
    
    if 'media' in request.files:

        result = cloudinary.uploader.upload(request.files['media'])
        mediaProduct = Product.get_by_id(id)
        mediaProduct.media = result['secure_url']

        db.session.add(mediaProduct)
        db.session.commit()

        return jsonify(mediaProduct.to_dict()), 200

    else:
        raise APIException('Missing profile_image on the FormData')

@api.route('/newproduct/<int:id>', methods=['POST'])
@jwt_required()
def new_product(id):
    account_id = 1
    price = request.json.get('price',None)
    text = request.json.get('text',None)
    category = request.json.get('category',None)
    product_name = request.json.get('product_name',None)
    media = ""

    
    new_product = Product(
                account_id=account_id,
                product_name=product_name,
                price=price,
                text=text,
                category=category,
                media=media
            )

    if new_product: 
        new_product.create()
        return jsonify(new_product.to_dict()),201

    else:
        return {'error':'Something went wrong'},409