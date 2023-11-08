const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
    }
};

exports.createUser = async (req, res) => {
    const { id, username, password, email, name, lastname} = req.body;
    const newUser = new User({ id, username, password, email, name, lastname });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};

exports.loginUser = async (req, res) =>{
    const userName = req.body.username;
    const userPassword = req.body.password;
    try {
        const loginUser = await User.find({ username: userName,password: userPassword });
        //si el array es 0 es por que no existe
        if (loginUser.length==0) {
            return res.status(404).send('usuario no encontrado');
        }
        res.status(202).json(loginUser);
        
    } catch (error) {
        console.error('Error al ingresar el usuario:', error);
        res.status(500).send('Error al ingresar el usuario');
    }
};