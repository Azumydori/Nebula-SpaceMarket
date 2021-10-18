"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import decimal
from flask import Flask, request, jsonify, url_for, Blueprint, redirect
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, JWTManager
from flask_cors import CORS

from api.models import db, Account, Order, Wishlist, Product, Line_Order

from sqlalchemy import exc
from decimal import Decimal
from datetime import timedelta, datetime

from api.utils import generate_sitemap, APIException
from werkzeug.security import check_password_hash, generate_password_hash
import stripe

import cloudinary
import cloudinary.uploader



api = Blueprint('api', __name__, static_url_path='', static_folder='public')

DOMAIN_SUCCESS = 'https://3000-teal-turkey-e7hjqm5n.ws-eu18.gitpod.io/success'
DOMAIN_FAILED = 'https://3000-teal-turkey-e7hjqm5n.ws-eu18.gitpod.io/error'

stripe.api_key = 'sk_test_51JXMcbFBOOWtTsFdzgGyOBEw5Ko5pVKfaGWwM8UECLtVeJeYV6CMP4q54DgNSyMzGsKsWLpo6wQwLht68ZiafTRx00JQhIDci6'


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

@api.route('/favorite/<int:product_id>/', methods=['POST'])
@jwt_required()
def add_whish(product_id,):
    current_user = get_jwt_identity().get("id")

    if not get_jwt_identity().get("id"):
        return {'error': 'Invalid action'}, 400

    new_whish = Wishlist(
        from_account = current_user,
        have_product =  product_id,
    )
    
    try:
        new_whish.create()
        print ("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", new_whish.to_dict())
        return jsonify(new_whish.to_dict())
    except exc.IntegrityError: 
        return {"error":"something went wrong"}, 409

@api.route('/client/<int:id>/favorites', methods=['DELETE'])
@jwt_required()
def remove_wish(id):
    user_with_wish = get_jwt_identity().get("id")
    if not get_jwt_identity().get("id"):
        return {'error': 'Incorrect user action'}, 400

    current_user = Wishlist.get_by_id(id)
    if current_user:
        current_user.delete()
        return jsonify(current_user.to_dict()), 200

    return {'error': 'user not found'}, 400

@api.route('/client/<int:id>/cart', methods=["GET"])
def get_cart():
    get_cart = Order.get_by_id(id)

    if get_cart:
        return jsonify(get_cart.to_dict()), 200
    
    return({"error": "lineOrder not found"}), 404

@api.route('/client/<int:id>/cart', methods=['POST'])
@jwt_required()
def add_item_cart(id):
    print("soy cartproduct")
    print("soy el ID", id)
    if not get_jwt_identity().get("id") == id:
        return {'error': 'Invalid action'}, 400

    id_product = request.json.get("product_id", None)
    print ("soy product ID", id_product)

    order = db.session.query(Order).filter_by(account_id = id).first()
    print(order, "Soy ORDER")

    if order is None:
        user = db.session.query(Account).filter_by(id = id).first()
        user_dic = user.to_dict()
        new_order = Order(
            order_date = datetime.now(),
            shipping_date = datetime.now(),
            shipping_fee = 1,
            bill_address = "Hola soy una direccion!",
            is_paid = False,
            account_id = id,
            ) 

        order_add = db.session.add(new_order)
        db.session.commit()
        print(new_order, "SOY NEW ORDER")
        new_order_dic = new_order.to_dict()
        print(new_order_dic, "SOY NEW ORDER DIC")
        new_cart = Line_Order(
            product_id = id_product,
            quantity =1,
            order_id = new_order_dic.id
            )
        print(new_cart)
        
        if new_cart: 
            new_cart.create()
            return jsonify(new_cart.to_dict()),201

    #order_dic = order.to_dict()
    #print(order_dic, "SOY ORDER DIC")

    else:
        new_cart = Line_Order(
            product_id = id_product,
            quantity =1,
            order_id = order.id
            )
        print(new_cart)
        
        if new_cart: 
            new_cart.create()
            return jsonify(new_cart.to_dict()),201

   # try:
    #    new_cart.create()
    #   print ("jsonify", jsonify(cart.to_dict()))
    #  return jsonify(cart.to_dict())
    #except exc.IntegrityError: 
    #  return {"error":"something went wrong"}, 409


@api.route('/cart', methods=['GET'])
def all_cart():
    cart = Line_Order.get_all()

    if cart:
        cart_all = [lineorder.to_dict() for lineorder in cart]

        return jsonify(cart_all), 200

    return jsonify({'error': "Products not found"}), 404

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
        print(id)
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
    account_id = get_jwt_identity().get("id")
    price = request.json.get('price',None)
    text = request.json.get('text',None)
    category = request.json.get('category',None)
    product_name = request.json.get('product_name',None)
    media = ""

    
    new_product = Product(
         id=price,
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

@api.route('/payment/card', methods=['POST'])
def payment():
    try:
        data = request.json
        charge = stripe.Charge.create(
            amount = data["amount"],
            currency = "usd",
            description = data["description"],
            source = "tok_visa",
            idempotency_key = data["id"],
            api_key = 'sk_test_51JXMcbFBOOWtTsFdzgGyOBEw5Ko5pVKfaGWwM8UECLtVeJeYV6CMP4q54DgNSyMzGsKsWLpo6wQwLht68ZiafTRx00JQhIDci6'
        )
        print(charge)
        return jsonify({"success":"payment_done!"})
    except stripe.error.StripeError as e:
        print(e)
        return jsonify({"error":"card information incomplete"})
