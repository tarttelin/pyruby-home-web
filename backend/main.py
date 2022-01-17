from flask import Flask, request
from middleware import Middleware

app = Flask('MyApp')

app.wsgi_app = Middleware(app.wsgi_app)

@app.route("/api/greet")
def greet():
    user = request.environ.get('user', {'name': 'guest'})
    return {'greeting': f"Hello {user['name']}"}

if __name__ == "__main__":
    app.run('127.0.0.1', '5000', debug=True)
