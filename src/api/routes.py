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

from werkzeug.security import check_password_hash, generate_password_hash

api = Blueprint('api', __name__)



@api.route('/account/<int:id>', methods={"GET"})
def get_account_profile(id):
    account = Account.get_by_id(id)

    if account:
        return jsonify(account.to_dict()), 200
    
    return({"error": "Account not found"}), 404
    
@api.route("/addreview/<int:id>", methods=["POST"])
def create_review(id):
    review_text = request.json.get("review_text", None)
    print(review_text, "asdfsadfsdfasdfdsfasd")



@api.route('/register', methods=['POST'])
def create_account():
    #Creamos todas las varibles a la vez 
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
        return jsonify(new_user.to_dict()), 201
    except exc.IntegrityError: 
        return {"error":"something went wrong"}, 409


@api.route('/login', methods=["POST"])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not (email and password):
        return({'error':'Missing info'}), 400

    account = Account.get_by_email(email)

    if account and check_password_hash(account._password, password) and account._is_active:
        token = create_access_token(identity=account.id, expires_delta=timedelta(minutes=100))
        return({'token' : token}), 200
    else:
        return({'error':'Some parameter is wrong'}), 400


@api.route('/account/<int:id>', methods = ['PATCH'])
def update_account(id):
    account = Account.get_by_id(id)

    if account:
        account.update_account_status()
        return jsonify(account.to_dict()), 200

    return jsonify({'msg' : 'Account not foud'}), 404


@api.route('/product', methods=['POST'])
def add_new_product():


    
    product_name = request.json.get("product_name", None)
    text = request.json.get("text", None)
    shopname = request.json.get("shopname", None)
    price = request.json.get("price", None)
    category = request.json.get("category", None)


    if isinstance(price, int):
        price = Decimal(f'{price}')
    
    if isinstance(price, str):
        price = Decimal(f'{price}')

    if not (product_name and text and price and category):
        return {"error":"Missing info"}, 400

    new_product = Product(
        product_name = product_name,
        text = text,
        shopname = shopname,
        price = price,
        category = category,
    )

    try:
        new_product.create()
        return jsonify(new_product.to_dict())
    except exc.IntegrityError: 
        return {"error":"something went wrong"}, 409


@api.route('/product/<int:id>', methods={"GET"})
def get_one_product(id):
    one_product = Product.get_by_id(id)

    if one_product:
        return jsonify(one_product.to_dict()), 200
    
    return({"error": "Product not found"}), 404