const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/la_tienda_del_vinilo').then(() => {
    console.log('Connected to database 😎');
})
    .catch((error) => {
        console.log(error);
        process.exit(-1);
    });;


app.use(cors());

app.use(bodyParser.json())
app.use('/api', productRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});