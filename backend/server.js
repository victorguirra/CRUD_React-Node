const express = require('express');
const app = express();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/CRUD_React-Node', {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('Successfully Connected With MongoDB Database!');

}).catch((error) => {
    console.log(`Connection Error: ${error}`);
    
})

requireDir('./src/models');

app.use('/', require('./src/routes'));

app.listen(3333, () => {
    console.log('Server Running At URL: http://localhost:3333')
})