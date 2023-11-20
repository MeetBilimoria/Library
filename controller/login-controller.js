const RegisterModel = require("../models/register");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // fetching the email to check the authentication

    const user = await RegisterModel.findOne({ email: email });

    //Checking the login password with the register password
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("Password is incorrect");
        console.log(user.password)
      }
    } else {
      res.json("No user was found");
    }
  } catch (error) {
    console.error("Error in loginController:", error);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = loginController;
