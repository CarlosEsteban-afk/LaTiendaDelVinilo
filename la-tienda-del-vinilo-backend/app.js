const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/la_tienda_del_vinilo');

app.use(bodyParser.json())

app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});