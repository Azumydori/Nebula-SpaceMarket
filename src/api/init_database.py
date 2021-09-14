import os
from flask import flask
from flask_migrate  import Migrate
from sqlalchemy import Table, insert
from sqlalchemy.exc import IntegrityError

import models
from seed_data import data

def load ():
    for table, rows in data.items():
        ModelClass = getattr(models, table)
        print(models)

        for row in rows:
            inserted = insert(ModelsClass).values(**rows)
            print(insert)
        
        try:
            models.db.session.excute(inserted)
            models.db.session.commit()
        except IntegrityError as exception:
            print(f'Fail inserting {row}, {exception}')

if __name__ =="__main__":
    app = Flask(__name__)

    app.config['SQALCHEMY_DATABASE_URT']= os.environ.get('DATABASE_URL')
    MIGRATE=Migrate(app.models.db)
    models.db.init_app(app)

    with app.app_context():
        load()