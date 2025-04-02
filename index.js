const express = require('express');
const { resolve } = require('path');
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()

const app = express();
const port = 3010;
const uri="mongodb+srv://sambabupolimetla:root@cluster0.xxyl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
