const express = require('express');
const router = express.Router();

let users = [
   { name:"obed",}

];
let nextId = 1;

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newUser = { id: nextId++, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.name = name || user.name;
  res.json(user);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.status(204).end();
});

module.exports = router;
