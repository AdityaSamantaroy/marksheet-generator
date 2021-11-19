# setup flask application
from flask import Flask
#from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager
from flask_cors import CORS

cors = CORS()

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'tronlives4ever'
    cors.init_app(app)
    from .views import views
    app.register_blueprint(views, url_prefix='/')

    return app
