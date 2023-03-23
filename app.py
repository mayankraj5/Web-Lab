from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import os

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)

db = SQLAlchemy()
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///" + os.path.join(basedir, "database.db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY']="adjlhewfuhewlj"
db.init_app(app)

app.app_context().push()


class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String(), nullable=False, unique=True)
    feed = db.Column(db.String, nullable=False)
    gender = db.Column(db.String, nullable=False)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/feed', methods = ['POST','GET'])
def feed():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        feed = request.form['feed']
        gender = request.form['gender']
        print(email, name, feed, gender)
        user = User(
            name=name,
            email=email,
            feed=feed,
            gender=gender
        )

        db.session.add(user)
        db.session.commit()
        return "Success"
    return render_template('./index.html')

if __name__ == "__main__" :
    app.run(debug=True)