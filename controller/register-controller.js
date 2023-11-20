const RegisterModel = require("../models/register");

const registerController = async (req, res, next) => {
    const { user, email, password } = req.body;

    //registration
    let newRegister; 

    try {
        newRegister = new RegisterModel({
            user,
            email,
            password
        });

        await newRegister.save();

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Unable to register' });
    }

    if (!newRegister) {
        return res.status(500).json({ message: 'Unable to register' });
    }

    return res.status(201).json({ newRegister });
};

module.exports = registerController;
