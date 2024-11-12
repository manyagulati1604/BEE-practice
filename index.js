const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us Page');
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'getform.html'));
});

app.post('/user', (req, res) => {
    const { name, email, password } = req.body;
    const userData = { name, email, password };
    fs.appendFileSync('data.json', JSON.stringify(userData) + '\n');

    res.json({ data: userData });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});