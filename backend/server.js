const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/CRUD_React-Node', {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('Successfully Connected With MongoDB Database!');

}).catch((error) => {
    console.log(`Connection Error: ${error}`);
    
})

app.use('/', require('./src/routes'));

app.listen(3333, () => {
    console.log('Server Running At URL: http://localhost:3333')
})