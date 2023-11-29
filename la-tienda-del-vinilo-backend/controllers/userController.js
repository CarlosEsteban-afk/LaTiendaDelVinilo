const User = require('../models/userModel');

exports.addToCart = async (req, res) => {
    try {
        const { rut } = req.params;
        const { id, name, stock, price, description, category, rating, imgUrl } = req.body

        const result = await User.findOne({ rut });
        console.log(result);

        try {
            result.cartItems.push({ id, name, stock, price, description, category, rating, imgUrl });
            result.save();
        } catch (error) {
            console.log(error);
        }

        res.json(result)

    } catch (err) {
        console.log(err);
    }
};

exports.getUserCart = async (req, res) => {
    const { rut } = req.params;
    const result = await User.findOne({ rut })
    const userCart = result.cartItems;
    if (!userCart) {
        return res.status(404).send('Carrito vacio');
    }

    res.json(userCart);

};

exports.deleteItemFromCart = async (req, res) => {
    const { rut } = req.params;
    const { id } = req.body
    const result = await User.findOne({ rut })

    try {
        if (!result.cartItems) {
            return res.status(404).send('Carrito vacio');
        }

        var filtered = result.cartItems.findIndex((product) => product.id === id)
        result.cartItems.splice(filtered, 1);
        try {
            result.save();
        } catch (error) {
            console.log('Error en guardar en la base de datos: ', error);
        }
        res.json(result.cartItems)

    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).send('Error al eliminar el producto');
    }

};

exports.addToWishlist = async (req, res) => {
    try {
        const { rut } = req.params;
        const { id, name, stock, price, description, category, rating, imgUrl } = req.body

        const result = await User.findOne({ rut });
        console.log(result);

        try {
            result.wishlistItems.push({ id, name, stock, price, description, category, rating, imgUrl });
            result.save();
        } catch (error) {
            console.log(error);
        }

        res.json(result)

    } catch (err) {
        console.log(err);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
    }
}

exports.getUserWishlist = async (req, res) => {
    const { rut } = req.params;
    const result = await User.findOne({ rut });
    console.log(result);
    try {
        const items = await result.wishlistItems;
        res.json(items);
    } catch (err) {
        console.log(err);
    }
}

exports.getUserPreviousPurchases = async (req, res) => {
    const { rut } = req.params;
    const result = await User.findOne({ rut });
    console.log(result);
    try {
        const items = await result.previousPurchases;
        res.json(items);
    } catch (err) {
        console.log(err);
    }
}

exports.removeFromWishlist = async (req, res) => {
    const { rut } = req.params;
    const result = await User.findOne({ rut });
    const id = parseInt(req.body.id);

    try {
        if (!result.wishlistItems) {
            return res.status(404).send('Lista de deseos vacía');
        }

        var filtered = result.cartItems.findIndex((item) => item.id === id)
        result.wishlistItems.splice(filtered);
        try {
            result.save();
            res.status(204).send('Producto eliminado');
        } catch (error) {
            console.log('Error al guardar en la base de datos: ', error)
        }

    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).send('Error al eliminar el producto');
    }
};

exports.createUser = async (req, res) => {
    const { rut, username, email, name, lastname, password } = req.body;
    const user = new User({ rut, username, email, name, lastname, password });
    try {
        const savedUser = await newUser.save();
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send({ error: 'Internal server error' });
    };
}

exports.loginUser = async (req, res) => {
    const userName = req.body.username;
    const userPassword = req.body.password;
    try {
        const loginUser = await User.find({ username: userName, password: userPassword });
        //si el array es 0 es por que no existe
        if (loginUser.length == 0) {
            return res.status(404).send('usuario no encontrado');
        }
        res.status(202).json(loginUser);

    } catch (error) {
        console.error('Error al ingresar el usuario:', error);
        res.status(500).send('Error al ingresar el usuario');
    }
};

exports.editUser = async (req, res) => {
    const rut = req.params;
    try {
        const updatedUser = await User.findOneAndUpdate(rut,
            {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                name: req.body.name,
                lastname: req.body.lastname
            }, {
            new: true
        });
        if (!updatedUser) {
            res.status(404).send('usuario no encontrado');
        }
        res.json(updatedUser);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).send('Error al actualizar el usuario');
    }
};

exports.getUser = async (req, res) => {
    const { rut } = req.params;
    const result = await User.findOne({ rut });
    console.log(result);
    try {
        res.json(result);
    } catch (err) {
        console.log(err);
    }
}