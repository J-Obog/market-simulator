from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy 
from flask_migrate import Migrate 

# application plugins
cors = CORS()
db = SQLAlchemy()
migrate = Migrate()

def create_app():
  # configuring app
  app = Flask(__name__)
  app.config.from_pyfile("config.py")
  app.url_map.strict_slashes = False
  
  # binding plugins
  cors.init_app(app)
  db.init_app(app)
  migrate.init_app(app, db)

  return app