const User = require('../models/userModel');

exports.addToCart = async (req, res) => {
    try {
        const { rut } = req.params;
        const { id, name, stock, price, description, category, rating, imgUrl } = req.body

        const result = await User.findOne({ rut });

        console.log(result);
        result.cartItems.push({ id, name, stock, price, description, category, rating, imgUrl });
        try {
            result.save();
        } catch (error) {
            console.log(error);
        }

        res.json(result)

    } catch (err) {
        console.log(err);
    }
};
exports.addToWishlist = async (req, res) => {
    try {
        const { rut } = req.params;
        const { id, name, stock, price, description, category, rating, imgUrl } = req.body

        const result = await User.findOne({ rut });
        console.log(result);
        
        try {
            if(Product.find({ id })){
               result.wishlistItems.push({ id, name, stock, price, description, category, rating, imgUrl });
            }
            else {
                const found = await Product.find({id});
               result.wishlistItems.pop(found);
            }
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
    try {
        const users = await User.find();
        res.json(users.wishlistItems);
    } catch (err) {
        console.log(err);
    }
}

exports.removeFromWishlist = async (req, res) => {
        const { rut } = req.params;
        const { id } = req.body

        const result = await User.findOne({ rut });
        console.log(result);
        try{
            const deletedProduct = await Product.findOneAndDelete({ id });
            if (!deletedProduct) {
                return res.status(404).send('Producto no encontrado');
            }
            res.status(204).send('Producto eliminado');
        } catch(error) {
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
    }
};