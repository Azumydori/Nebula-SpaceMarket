import os
from flask import Flask
from flask_migrate  import Migrate
from sqlalchemy import Table, insert
from sqlalchemy.exc import IntegrityError

import models
from seed_data import data

def load ():
    for table, rows in data.items():
        ModelClass = getattr(models, table)
        print(ModelClass)

        for row in rows:
            inserted = insert(ModelClass).values(**row)
            print(inserted)
        
        
        try:
            models.db.session.execute(inserted)
            #models.db.session.commit()
        except IntegrityError as exception:
            print(f'Fail inserting {row}, {exception}')
        

if __name__ =="__main__":
    app = Flask(__name__)

    app.config['SQALCHEMY_DATABASE_URI']= os.environ.get('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    MIGRATE=Migrate(app, models.db)
    print(MIGRATE)
    models.db.init_app(app)

    with app.app_context():
        load()