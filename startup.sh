#!/bin/bash
cd Frontend-TFC
pip install npm
npm install

cd ../Backend-TFC
python3 -m pip install virtualenv
python3 -m virtualenv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python3 manage.py makemigrations accounts
python3 manage.py makemigrations studios
python3 manage.py makemigrations classes
python3 manage.py makemigrations subscriptions
python3 manage.py migrate
