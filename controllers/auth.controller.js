const users = require("../data/users");
const preferences = require("../data/preferences");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function signup(req, res) {
    const { name, email, password, preferences: userPreferences } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword
    };

    users.push(newUser);

    preferences[newUser.id] = userPreferences || [];

    res.status(200).json({
        message: "User registered successfully"
    });
}

async function login(req, res) {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.status(200).json({
        token
    });
}

module.exports = {
    signup,
    login
};
