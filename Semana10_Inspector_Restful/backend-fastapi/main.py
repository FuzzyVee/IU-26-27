from fastapi import FastAPI, HTTPException, status, Response
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuración de CORS para permitir peticiones desde tu frontend
origins = [
    "http://localhost:8080",
    "http://127.0.0.1:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permite tu origen en el puerto 8080
    allow_credentials=True,
    allow_methods=["*"],    # Permite todos los métodos (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],    # Permite todas las cabeceras
)

# Este es un codigo para clase de IU
users = [
    {"id": 1, "name": "AliceFast", "email": "alice@example.com"},
    {"id": 2, "name": "BobFast", "email": "bob@example.com"},
]

class User(BaseModel):
    name: str
    email: str


@app.get("/")
def read_root():
    #return {"Hello": "World"}
    return "API is working!"


@app.get("/users/")
def read_all_user():
    try:
        return users
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))


@app.get("/users/{user_id}")
def read_user(user_id: int):
    
    for user in users:
        if user["id"] == user_id:
            return user 

    raise HTTPException(status_code=404, detail="User not found")
        

@app.post("/users/", status_code=status.HTTP_201_CREATED)
def create_user(user_data: User):
    
    new_user = {
        "id": len(users) + 1,
        "name": user_data.name,
        "email": user_data.email
    }

    users.append(new_user)
    return new_user


@app.put("/users/{user_id}")
def update_user(user_id: int, user_data: User):
    
    for user in users:
        if user["id"] == user_id:
            
            user["name"] = user_data.name
            user["email"] = user_data.email    
            
            return user 

    raise HTTPException(status_code=404, detail="User not found")


@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    
    for user in users:
        if user["id"] == user_id:
            
            users.remove(user)
            return Response(status_code=204)
        
    raise HTTPException(status_code=404, detail="User not found")

##########################################3