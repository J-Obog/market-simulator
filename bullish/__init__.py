from flask import Flask, render_template

def create_app():
  app = Flask(__name__)

  @app.route('/')
  def index():
    return render_template('accounts.html')
  
  @app.route('/test')
  def test():
    return render_template('layout.html') 

  return app
