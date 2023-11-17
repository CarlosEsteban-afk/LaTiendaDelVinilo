const User = require('../models/userModel');

exports.addToCart = async (req, res) => {
    try {
        const { rut } = req.params;
        const { id, name, stock, price, description, category, rating, imgUrl } = req.body

        const result = await User.findOne({ rut });

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

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
    }
}
