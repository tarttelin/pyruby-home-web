from flask import Flask, request, jsonify
from middleware import Middleware
from resolvers import resolvers
from ariadne import QueryType, graphql_sync, make_executable_schema, load_schema_from_path
from ariadne.constants import PLAYGROUND_HTML


app = Flask('MyApp')

app.wsgi_app = Middleware(app.wsgi_app)

@app.route("/api/greet")
def greet():
    user = request.environ.get('user', {'name': 'guest'})
    return {'greeting': f"Hello {user['name']}"}

type_defs = load_schema_from_path("./sdl/")
schema = make_executable_schema(type_defs, *resolvers)


@app.route("/graphql", methods=["GET"])
def gql_playground():
    return PLAYGROUND_HTML, 200


@app.route("/graphql", methods=["POST"])
def gql_server():
    data = request.get_json()
    success, result = graphql_sync(
        schema,
        data,
        context_value=request
    )

    status_code = 200 if success else 400
    return jsonify(result), status_code

if __name__ == "__main__":
    app.run('127.0.0.1', '5000', debug=True)
