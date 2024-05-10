const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// creating json web token
const maxAge = 2 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_JWT_KEY, { expiresIn: maxAge });
};

// register post request to create a new user in db
const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.register(name, email, password);

        // create a token
        const token = createToken(user._id);

        res.status(200).json({ userId: user._id, name, email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// login post request 
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        // create a token
      const token = createToken(user._id)

        res.status(200).json({ userId: user._id, name: user.name, email: user.email, token })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = { register, login };