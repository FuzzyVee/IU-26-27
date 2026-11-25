const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//--------------------------
//--------------------------

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

// GET all users
app.get("/users", (req, res) => {
    try {
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/*app.get('/users', (req, res) => {
  res.json(users);
});*/


// POST a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

/*app.post("/users", async (req, res) => {
    try {
        const newUser = {
            id: users.length + 1,
            name: req.body.name,
            email: req.body.email
        };
        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});*/

// GET user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});


// PUT update user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

//--------------------------
//--------------------------

let clases = [
  { id: 1, name: 'IU', profesor: 'javi' },
  { id: 2, name: 'BBDD', profesor: 'david' },
];

// GET all clases
app.get("/clase", (req, res) => {
    try {
        res.json(clases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET user by ID (get clase by ID)
app.get('/clase/:id', (req, res) => {
  const clase = clases.find(u => u.id === parseInt(req.params.id));
  if (!clase) return res.status(404).send('clase not found');
  res.json(clase);
});

// POST a new user (Crear clase)
app.post('/clase', (req, res) => {
  
  const newClase = {
    id: clases.length + 1,
    name: req.body.name,
    profesor: req.body.profesor
  };

  clases.push(newClase);
  res.status(201).json(newClase);
});


// PUT update user (MODIFICAR CLASE)
app.put('/clase/:id', (req, res) => {
  const clase = clases.find(u => u.id === parseInt(req.params.id));
  if (!clase) return res.status(404).send('clase not found');

  clase.name = req.body.name;
  clase.profesor = req.body.profesor;
  res.json(clase);
});

// DELETE user
app.delete('/clase/:id', (req, res) => {
  clases = clases.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});