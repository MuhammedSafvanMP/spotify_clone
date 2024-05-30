const User = require("../models/userModel");
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    
    const { email, password, firstName, lastName, userName } = req.body
    
    // user email alredy exist checking

    const user = await User.findOne({ email: email });
    if(user) return res.status(403).json({ error: "A user with this email already exists" })

    // password converting to hashkey word
    const hashPassword = await bcrypt.hash(password, 10);

    // creating new user 

     const newUser = await User.create({ email, password: hashPassword, firstName, lastName, userName })
        await newUser.save();

        // create token 

        const token = await getToken(email, newUser);

        // return the result to the user

        const userToReturn = { ...newUser.toJSON(), token };
        delete userToReturn.password;
        return res.status(201).json(userToReturn);

}