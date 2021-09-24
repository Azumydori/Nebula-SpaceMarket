import os
from flask import Flask
from flask_migrate  import Migrate
from sqlalchemy import Table, insert
from sqlalchemy.exc import IntegrityError

import models
from models import db 
from seed_data import data

def load ():
    for table, rows in data.items():
        ModelClass = getattr(models, table)
        print(ModelClass)

        for row in rows:
            inserted = insert(ModelClass).values(**row)
            print(inserted)
        
        
        try:
            db.session.execute(inserted)
            db.session.commit()
        except IntegrityError as exception:
            print(f'Fail inserting {row}, {exception}')
        

if __name__ =="__main__":
    app = Flask(__name__)

    print(os.environ.get('DATABASE_URL'), 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    app.config['SQALCHEMY_DATABASE_URI']= os.environ.get('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    print(app.config)
    MIGRATE=Migrate(app, db)
    print(MIGRATE)
    db.init_app(app)

    with app.app_context():
        load()