from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Enum, Numeric, Table, ForeignKeyConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.orm import aliased
from sqlalchemy import create_engine
from werkzeug.security import check_password_hash

db = SQLAlchemy()

PHOTO_URL = "https://i.ytimg.com/vi/b-CWbJBcgF4/maxresdefault.jpg" 

class Account(db.Model):
   __tablename__ = 'account'

   id = db.Column(db.Integer, autoincrement=True, primary_key=True)

   username=db.Column(db.String, unique=True)
   first_name=db.Column(db.String, nullable=False)
   last_name=db.Column(db.String, nullable=False)
   profile_picture = db.Column(db.String, unique=False, default=PHOTO_URL)
   country=db.Column(db.String)
   state=db.Column(db.String)
   city=db.Column(db.String)
   address=db.Column(db.String)
   email = db.Column(db.String, unique=True, nullable=False)
   _password = db.Column(db.String, nullable=False)
   _is_active = db.Column(db.Boolean, unique=False, nullable=False, default=True)
   payment_type = db.Column(db.Enum("Fiat", "Paypal", "Crypto", name="payment"), nullable=False)

   review_text = db.Column(db.String, nullable = False)
   reviews_id = db.Column(db.Integer, db.ForeignKey('account.id'))
   have_reviews = db.relationship('Account', backref = db.backref('reviews', remote_side=[id]), lazy='dynamic')

   order_id = relationship("Order", lazy=True)
   have_product = relationship("Product", lazy=True, backref = "account")
   have_wishlist = relationship("Product", secondary = "wishlist")


   def __repr__(self):
      return f'Account {self.name}, mail {self.email}'
      
   def to_dict(self):
      return{
       "id": self.id,
        "first_name": self.first_name,
        "last_name": self.last_name,
        "email": self.email,
        "country": self.country,
        "state": self.state,
        "city": self.city,
        "address": self.address,
        "payment_type": self.payment_type
      }


class Order(db.Model):
   __tablename__ = 'order'

   id = db.Column(db.Integer, autoincrement=True, nullable=False, primary_key=True)
   order_date=db.Column(db.DateTime, nullable=False)
   shipping_date=db.Column(db.DateTime, nullable=False)
   shipping_fee=db.Column(db.Numeric, nullable=False)
   bill_address=db.Column(db.String, nullable=False)
   is_paid=db.Column(db.Boolean, nullable=False)

   account_id = db.Column(db.Integer, db.ForeignKey('account.id'))
   line_order_id = relationship("Line_Order", lazy=True, backref = "order")


   def to_dict(self):
      return{
        "id": self.id,
        "order_date": self.order_date,
        "shipping_date": self.shipping_date,
        "shipping_fee": self.shipping_fee,
        "bill_address": self.bill_address,
        "is_paid": self.is_paid,
        "product_id": self.product_id,
      }


class Product(db.Model):
   __tablename__ = 'product'

   id = db.Column(db.Integer,autoincrement=True ,nullable=False,primary_key=True)
   product_name=db.Column(db.String, nullable=False)
   text=db.Column(db.String, nullable=False)
   media=db.Column(db.String, nullable=False, default=PHOTO_URL)
   price=db.Column(db.Numeric, nullable=False)
   category=db.Column(db.Enum("Clothing", "Computers", "Home & Garden", "Sports", "NFTs", "Cellphones", "Gaming", "Movies, Books & Music", "Appliances", "TV, Audio & Cameras", "Motorbikes", "Other", name = "categories"), nullable=False)

   account_id = db.Column(db.Integer, db.ForeignKey('account.id'), nullable = False)
   have_line_order = relationship("Line_Order", lazy = True, backref = "product")

   def to_dict(self):
      return{
        "id": self.id,
        "product_name": self.product_name,
        "text": self.text,
        "media": self.media,
        "price": self.price,
        "category": self.category,
      }

class Wishlist(db.Model):
    __tablename__ = 'wishlist'
    from_account = Column(db.ForeignKey('account.id'), primary_key=True)
    have_product = Column(db.ForeignKey('product.id'), primary_key=True)
    name = db.Column(db.String, nullable = False)
    relation_products = relationship("Product", backref = "account_associations")
    relation_account = relationship("Account", backref = "product_associations")
   

class Line_Order(db.Model):
   __tablename__ = 'lineorder'

   id = db.Column(db.Integer, autoincrement=True, nullable=False, primary_key=True)
   quantity = db.Column(db.Integer, nullable=False)
   product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
   order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)