from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Enum, Numeric
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from werkzeug.security import check_password_hash

db = SQLAlchemy()

class Account(db.Model):
   __tablename__ = 'account'

   id = db.Column(db.Integer, primary_key=True)
   username=db.Column(db.String, unique=True)
   first_name=db.Column(db.String, nullable=False)
   last_name=db.Column(db.String, nullable=False)
   profile_picture = db.Column(db.String, unique=False, nullable=True, default="https://i.ytimg.com/vi/b-CWbJBcgF4/maxresdefault.jpg")
   country=db.Column(db.String, nullable=False)
   state=db.Column(db.String, nullable=False)
   city=db.Column(db.String, nullable=False)
   address=db.Column(db.String, nullable=False)
   email = db.Column(db.String, unique=True, nullable=False)
   _password = db.Column(db.String, nullable=False)
   _is_active = db.Column(db.Boolean, unique=False, nullable=False, default=True)
   payment_type = db.Column("payment", db.Enum("Fiat", "Paypal", "Crypto", name="payment"), nullable=False)
   account_review_id= relationship("Account_Review", lazy=True)
   whislist_id = relationship("Whislist", lazy=True)
   order_id = relationship("Order", lazy=True)
   product_id = relationship("Product", lazy=True)


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

   def create(self):
      db.session.add(self)
      db.session.commit()
      return self

   def update_account_status(self):
        self._is_active = not _is_active
        db.session.commit()

   def validate_password(self,password):
      is_valid = check_password_hash(self._password,password)
      print(is_valid)
      return is_valid
    
   def validate_username(self, username):
      if self.username == username:
        return True
      return False
    
   @classmethod
   def get_by_id(cls, id):
      account = cls.query.get(id)
      return account

   @classmethod
   def get_by_email(cls, email):
      account = cls.query.filter_by(email=email).one_or_none()
      return account
    
   @classmethod
   def get_by_username(cls, username):
      account = cls.query.filter_by(username=username).one_or_none()
      return account
    

class Order(db.Model):
   __tablename__ = 'order'

   id = db.Column(db.Integer, nullable=False,primary_key=True)
   order_date=db.Column(db.Date, nullable=False)
   shipping_date=db.Column(db.Date, nullable=False)
   shipping_fee=db.Column(db.Numeric, nullable=False)
   bill_address=db.Column(db.String, nullable=False)
   is_paid=db.Column(db.Boolean, nullable=False)
   product_id= db.Column(db.Integer, nullable=False)
   account_id = Column(db.Integer, db.ForeignKey('account.id'))
   line_order_id = relationship("Line_Order", lazy=True)


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


   def create(self):
      db.session.add(self)
      db.session.commit()
      return self

   

class Whislist(db.Model):
   __tablename__ = 'whislist'

   id = db.Column(db.Integer, nullable=False,primary_key=True)
   account_id = Column(db.Integer, db.ForeignKey('account.id'))
   product_id = Column(db.Integer, db.ForeignKey('product.id'))


   def create(self):
      db.session.add(self)
      db.session.commit()
      return self


class Product(db.Model):
   __tablename__ = 'product'

   id = db.Column(db.Integer, nullable=False,primary_key=True)
   product_name=db.Column(db.String, nullable=False)
   text=db.Column(db.String, nullable=False)
   media=db.Column(db.String, nullable=False, default="https://i.ytimg.com/vi/b-CWbJBcgF4/maxresdefault.jpg")
   price=db.Column(db.Numeric, nullable=False)
   category=db.Column(db.String, nullable=False)
   sub_category=db.Column(db.String, nullable=False)
   account_id = Column(db.Integer, db.ForeignKey('account.id'))
   line_Order_id = Column(db.Integer, db.ForeignKey('line_order.id'))
   whislist_id = relationship("Whislist", lazy=True)


   def to_dict(self):
      return{
        "id": self.id,
        "product_name": self.product_name,
        "text": self.text,
        "media": self.media,
        "price": self.price,
        "category": self.category,
        "sub_category": self.sub_category,
      }


   def create(self):
      db.session.add(self)
      db.session.commit()
      return self



class Account_Review(db.Model):
   __tablename__ = 'account_review'

   id = db.Column(db.Integer, nullable=False,primary_key=True)
   text=db.Column(db.String, nullable=False)
   rating=db.Column(db.Integer, nullable=False)
   account_id = Column(db.Integer, db.ForeignKey('account.id'))


   def to_dict(self):
      return{
       "id": self.id,
        "text": self.text,
        "rating": self.rating,
      }


   def create(self):
      db.session.add(self)
      db.session.commit()
      return self

class Line_Order(db.Model):
   __tablename__ = 'line_order'

   id = db.Column(db.Integer, nullable=False,primary_key=True)
   quantity=db.Column(db.Integer, nullable=False)
   order_id = Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
   product_id = relationship("Product", lazy=True)
   