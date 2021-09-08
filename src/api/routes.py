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



    @app.route ("/search, methods =["GET", "POST"])
def search():

	if request.method == "POST":
		search_value=request.json.get("search", None)
		search = "%{}%".format (search_value)
		result_title=product.query.filter(product.product_name.like(search)).all()
		result_text=product.query.filter(product.text.like(search)).all()




#@app.route('/search/<int:page>', methods=['GET', 'POST'], defaults={"page": 1}) 
#def search(page):
    #page = page
    #pages = 5
    #employees = Employees.query.filter().all()
    #employees = Employees.query.paginate(page,pages,error_out=False)
    #products = Product.query.order_by(Product.id.asc()).paginate(page,pages,error_out=False)  #desc()
    #if request.method == 'POST' and 'tag' in request.form:
       #tag = request.form["tag"]
       #search = "%{}%".format(tag)
       #employees = Employees.query.filter(Employees.fullname.like(search)).paginate(per_page=pages, error_out=False) # LIKE: query.filter(User.name.like('%ednalan%'))
       #employees = Employees.query.filter(Employees.fullname == 'Tiger Nixon').paginate(per_page=pages, error_out=True) # equals: query.filter(User.name == 'ednalan')    
       #employees = Employees.query.filter(Employees.fullname.in_(['rai', 'kenshin', 'Ednalan'])).paginate(per_page=pages, error_out=True) # IN: query.filter(User.name.in_(['rai', 'kenshin', 'Ednalan']))  
       #employees = Employees.query.filter(Employees.fullname == 'Tiger Nixon', Employees.position == 'System Architect').paginate(per_page=pages, error_out=True) # AND: query.filter(User.name == 'ednalan', User.fullname == 'clyde ednalan')    
       #employees = Employees.query.filter(or_(Employees.fullname == 'Tiger Nixon', Employees.fullname == 'Ednalan')).paginate(per_page=pages, error_out=True) # OR: from sqlalchemy import or_  filter(or_(User.name == 'ednalan', User.name == 'caite'))
       #return render_template('index.html', employees=employees, tag=tag)
    #return render_template('index.html', employees=employees)