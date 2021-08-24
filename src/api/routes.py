"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, JWTManager
from flask_cors import CORS
from api.models import db, Account, Order, Whislist, Product,Account_Review
from sqlalchemy import exc

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


@api.route('/account', methods=['POST'])
def create_account():
    #Creamos todas las varibles a la vez 
    first_name, last_name, email, password, username= request.json.get(
        "first_name", None
    ),request.json.get(
        "last_name", None
    ),request.json.get(
        "email", None
    ), request.json.get(
        "password", None
    ),request.json.get(
        "username", None
    )

    if not (first_name and last_name and email and password and username):
        return {"error":"Missing info"}, 400


    new_user = Account(
        email=email,
        first_name=first_name,
        last_name=last_name,
        password=password,
        username=username,

    )
    try:
        new_user.create()
        return jsonify(user.to_dict())
    except exc.IntegrityError: 
        return {"error":"something went wrong"}, 409


# Create a route to authenticate your users and return JWT Token. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    account = Account.filter.query(username=username, password=password).first()
    if account is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=account.id)
    return jsonify({ "token": access_token, "account": account.id })


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_account_id = get_jwt_identity()
    account = Account.filter.get(current_account_id)
    
    return jsonify({"id": account.id, "accountname": account.username }), 200