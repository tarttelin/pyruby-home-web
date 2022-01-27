from ariadne import ObjectType
from pydantic import BaseModel

class User(BaseModel):
    id: str
    username: str

query = ObjectType("Query")

@query.field("users")
def find_users(_, info):
    user = info.context.environ.get('user', {'name': 'guest'})
    return [User(id="someId", username=user['name'])]

resolvers = [query]