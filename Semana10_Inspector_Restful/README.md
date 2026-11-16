# SEMANA 10: RESTful (Parte I)

> **Nota y advertencia**: Este directorio utiliza un ejemplo de entidad y una estructura de código que no corresponde con la arquitectura de la ET2 u ET3. 
Simplemente sirve como ejemplo para ilustrar el ejercicio y la presentación del funcionamiento del Inspector, y la introduccion al funcionamiento y lógica de los APIs backend RESTful, y sus interacciones con un frontend Client.
>
> Por lo tanto, **el código de este directorio no debe usarse como referencia o base para la preparación de las entregas de la asignatura**, tan solo como ejemplos de Servers backend RESTful y un Client compatible simple, util para probar estos Servers y el Inspector.

## Estructura

3 Carpetas:

1. frontend-simple (Client): Un cliente simple, que muestra los ejemplos mostrados en la clase practica. Esta implementado con HTML, un script CSS simple, y scripts Javascript nativo. Contiene codigo para hacer pruebas con el Inspector y ejecutar funcionalidades CRUD de Users. Se puede configurar para poder comunicarse con los siguientes Servers. 

2. backend-nodejs (Server NodeJS): Un Server RESTful simple, implementado en NodeJS. Contiene los Endpoints básicos para Users y Clases: 
    - GET 
    - GET (by Id User)
    - POST
    - PUT (by Id User)
    - DELETE (by Id User)

Para simplificar el desarrollo e implementación, en vez de utilizar una base de datos verdadero, se ha utilizado una lista json "interno" como sustituto a una base de datos. 


3. backend-fastapi (Server FastAPI): Un Server RESTful simple, implementado en NodeJS. Contiene los Endpoints básicos para Users: 
    - GET 
    - GET (by Id User)
    - POST
    - PUT (by Id User)
    - DELETE (by Id User)

Para simplificar el desarrollo e implementación, en vez de utilizar una base de datos verdadero, se ha utilizado una lista json "interno" como sustituto a una base de datos. 


## Como ejecutar el Client
1. Instalar http-server en el windows cmd usando el siguiente comando: npm install --global http-server
2. En el windows cmd, entrar dentro de la carpeta frontend-simple, en el directorio que se encuentra index.html
3. Ejecuta el comando: http-server --proxy http://localhost:8080?
4. En un navegador, ve al url: http://localhost:8080

## Como ejecutar el Server Nodejs
1. Tener instalado Node.js y Visual Studio Code
2. Abrir API en Visual Studio Code (VSC)
3. Abrir terminal de VSC, entrar en la carpeta backend-nodejs, en el directorio donde se encuentra server.js
4. Ejecutar comandos en el terminal:
    - npm install express cors
    - npm install
5. Ejecutar comando: npm start

## Como ejecutar el Server FastAPI
1. Tener python 3 y un IDE como VSC
2. Abrir API en Visual Studio Code (VSC)
3. Abrir terminal de VSC, entrar en la carpeta backend-fastapi, en el directorio donde se encuentra main.js
4. Ejecutar comandos en el terminal:
    - pip install fastapi
    - pip install "fastapi[standard]"
5. Ejecutar comando: uv run fastapi dev
6. En caso de que fastapi no funciona, ejecuta: uv run uvicorn main:app --reload

## Como cambiar a que Server apunta el Client
1. Entra en el archivo frontend-simple/config.js
2. Para apuntar al Server Nodejs, debes tener solo descomentado la linea que apunta al localhost:5000

``` js
localStorage.setItem("backendUrl", "http://localhost:5000");
//localStorage.setItem("backendUrl", "http://localhost:8000");
```

2. Para apuntar al Server FastAPI, debes tener solo descomentado la linea que apunta al localhost:8000
``` js
//localStorage.setItem("backendUrl", "http://localhost:5000");
localStorage.setItem("backendUrl", "http://localhost:8000");
```


## Muestra Breve de código Client (el código que permite la comunicación a los Servers RESTful)


- Get all users (en tabla_pag.js):

``` js
function getAllUsers() {

  // url al servidor REST - Peticion GET: 
  // http://localhost:5000/users 
  console.log("URLSERVERgetall: " + URLSERVERgetall);
  
  return fetch(URLSERVERgetall)
        .then((response) => { 
            return response.json()

        .then((data) => {
            console.log(data);
            return buildVentana(data);
    
        }).catch((err) => {
            console.log(err);
            return buildVentana(null);

          }) 
        });
}
```


- Get user by ID (en detail.js):

``` js
function getUser() {

    // url al servidor REST - Peticion GET: 
    // http://localhost:5000/users/id_user 
    return fetch(URLSERVERdetail + idHTML)
        .then((response) => { 
            return response.json().then((data) => {
                console.log(data);
                return appendData(data);
            }).catch((err) => {
                console.log(err);
            }) 
        });

}
```


- Crear User (en create.js):

``` js
async function sendData(){

    const nuevoUsers = {
        name: name,
        email: email,
    }

    // url al servidor REST - Peticion POST: 
    // http://localhost:5000/users  
    const apiCall = await fetch(URLSERVERCreate, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(nuevoUsers)
    })

    if(!apiCall.ok){
        alert("No se ha podido crear usuario");
        window.location.href = "table_pag.html?page=" + 1; 
    }else{        

        const result = await apiCall.json();
        console.log(result);

        if(result.status === 400 || result.status === 500 || result.hasOwnProperty("error")){
            alert("No se ha podido crear usuario");
            window.location.href = "table_pag.html?page=" + 1; 
        }else{
            //console.log(response);
            alert("Usuario creado correctamente");
            window.location.href = "table_pag.html?page=" + 1;        
        }
    }
}
```


- Modificar User by ID (en modify.js):

``` js
async function sendData(){

    const modUser = {
        name: name,
        email: email,
    }

    // url al servidor REST - Peticion PUT: 
    // http://localhost:5000/users/id_user
    const response = await fetch(URLSERVERModify + idHTML, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(modUser)
    })

    if(!response.ok){
        alert("No se ha podido modificar usuario")
        window.location.href = "table_pag.html?page=" + 1;
    }else{

        const result = await response.json();
        console.log(result);

        if(result.status === 400 || result.status === 500 || result.hasOwnProperty("error")){
            alert("No se ha podido modificar usuario")
            window.location.href = "table_pag.html?page=" + 1;
            
        }else{
            alert("Usuario modificado correctamente")
            window.location.href = 'table_pag.html?page=' + 1;
            
        }
    }
}
```


- Borrar User by ID (en delete.js):

``` js
async function deleteData(){

    // url al servidor REST - Peticion DELETE: 
    // http://localhost:5000/users/id_user
    const result = await fetch(URLSERVERDelete + idHTML, {
        method: "DELETE"
    })

    console.log(result);

    if(result.status !== 204 || result.hasOwnProperty("error")){
        alert("No se ha podido borrar usuario");
        window.location.href = "table_pag.html?page=" + 1;
        
    }else{
        console.info("Usuario borrado correctamente");
        alert("Usuario borrado correctamente");
        window.location.href = "table_pag.html?page=" + 1;
    }
}
```

## Muestra Breve de código Server NodeJS (muestra breve de los Endpoints en server.js)

- Get all users:

``` js
app.get("/users", (req, res) => {
    try {
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
```


- Get user by id:

``` js
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});
```


- Crear user:

``` js
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
```


- Modificar user by id:

``` js
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});
```


- Borrar user by id:

``` js
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});
```



## Muestra Breve de código Server FastAPI (muestra breve de los Endpoints en main.py)

- Get all users:

``` py
@app.get("/users/")
def read_all_user():
    try:
        return users
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))
```


- Get user by id:

``` py
@app.get("/users/{user_id}")
def read_user(user_id: int):
    
    for user in users:
        if user["id"] == user_id:
            return user 

    raise HTTPException(status_code=404, detail="User not found")
```


- Crear user:

``` py
@app.post("/users/", status_code=status.HTTP_201_CREATED)
def create_user(user_data: User):
    
    new_user = {
        "id": len(users) + 1,
        "name": user_data.name,
        "email": user_data.email
    }

    users.append(new_user)
    return new_user
```


- Modificar user by id:

``` py
@app.put("/users/{user_id}")
def update_user(user_id: int, user_data: User):
    
    for user in users:
        if user["id"] == user_id:
            
            user["name"] = user_data.name
            user["email"] = user_data.email    
            
            return user 

    raise HTTPException(status_code=404, detail="User not found")
```


- Borrar user by id:

``` py
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    
    for user in users:
        if user["id"] == user_id:
            
            users.remove(user)
            return Response(status_code=204)
        
    raise HTTPException(status_code=404, detail="User not found")
```