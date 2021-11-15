# storing roots of the webpages
from flask import Blueprint, render_template, request, flash, jsonify, redirect, url_for
from flask_login import login_required, current_user
from werkzeug.utils import secure_filename
import os

# this file is a blueprint of our site

views = Blueprint('views', __name__)
UPLOAD_FOLDER = os.getcwd() + '/website/uploads/csv'
ALLOWED_EXTENSIONS = {'csv'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@views.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            print('UPLOAD', UPLOAD_FOLDER, os.getcwd())
            file.save(os.path.join(UPLOAD_FOLDER, filename))
            return redirect(request.url)
    return render_template("home.html")
