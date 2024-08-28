const express = require('express');
const app = express();
app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem); 
});

app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    items[id] = updatedItem; 
    res.json(updatedItem);
}); 

app.delete('/items/:id', (req, res) => {
    const id = req.params.id; 
    items.splice(id, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('API sta correndo su http://localhost:3000');
    
});