"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from api.models import db, Account, Order, Whislist, Product,Account_Review

from sqlalchemy import exc
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

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
