from firebase_admin import auth
import firebase_admin
from functools import wraps
from flask import request

from werkzeug.wrappers import Request

default_app = firebase_admin.initialize_app(options={'projectId': "pyruby-web-home"})


def is_authenticated(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if not request.headers.get('authorization'):
            pass

class Middleware():

    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        request = Request(environ)
        print("checking auth token")
        token = request.headers.get('Authorization', None)
        if token is not None:
            user = auth.verify_id_token(token.split(' ')[1])
            environ['user'] = user
        return self.app(environ, start_response)
