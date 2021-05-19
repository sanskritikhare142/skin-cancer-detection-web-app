from flask import Flask, flash, render_template, request, redirect, send_from_directory
from werkzeug.utils import secure_filename
from keras.preprocessing.image import ImageDataGenerator
import tensorflow as tf
import numpy as np
import os
import bcrypt
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

model = tf.keras.models.load_model('../saved_model')
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = '../src/assets/img/uploaded/sample'
mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/Skin-cancer")
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/signup": {"origins": "http://localhost:5000"}})
cors = CORS(app, resources={r"/login": {"origins": "http://localhost:5000"}})

def finds():
	test_datagen = ImageDataGenerator(rescale = 1./255)
	vals = ['benign', 'malignant'] 
	test_dir = '../src/assets/img/uploaded'
	test_generator = test_datagen.flow_from_directory(
        test_dir,
		target_size =(144, 144),
		color_mode ="rgb",
		shuffle = False,
		class_mode ='binary',
		batch_size = 1)

	pred = model.predict_generator(test_generator)
	print(pred)
	return str(vals[np.argmax(pred)])

@app.route('/uploader', methods = ['POST'])
def upload_file():
    if request.method == "POST":
        f = request.files['file']
        f.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(f.filename)))
        return {"result":finds()}

@ app.route('/signup', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def signupUser():
    try:
        db = mongodb_client.db
        print("Connected to database")
        
        if request.method == "POST":
            dEM = request.form['email']
            dPW = request.form['password']
            cPW = request.form['confirmPassword']
            # print("Hi")
            checkUser = db.users.find_one({"email":dEM})
            print(checkUser)
            if(checkUser):
                return({"success": False, "message":"User already exists"}), 400
            if cPW != dPW:
                print("Hi")
                return({"success": False, "message":"Passwords don't match"}), 403
            hashPassword=bcrypt.hashpw(dPW.encode('utf-8'),bcrypt.gensalt())
            db.users.insert({"email":dEM, "password":hashPassword})
            return ({"success": True, "message":"User signed up!"}), 200
    except Exception as e:
        print(e)
        return ({"success": False, "message":"Unknown error"}),500

@ app.route('/login', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def loginUser():
    try:
        db = mongodb_client.db
        print("Connected to database")
        
        if request.method == "POST":
            dEM = request.form['email']
            dPW = request.form['password']
            # print("Hi")
            checkUser = db.users.find_one({"email":dEM})
            print(checkUser)
            if(checkUser is None):
                return({"success": False, "message":"User doesn't exists, please sign up!"}), 401
           
            if(bcrypt.checkpw(dPW.encode('utf-8'),checkUser['password'])):
                return ({"success": True, "message":"User logged in!"}), 200
        return ({"success": False, "message":"Invalid Password"}), 401
    except Exception as e:
        print(e)
        return ({"success": False, "message":"Unknown error"}),500