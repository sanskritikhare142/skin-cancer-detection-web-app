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
# mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/Skin-cancer")
# app.config['CORS_HEADERS'] = 'Content-Type'

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
