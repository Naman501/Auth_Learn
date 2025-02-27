const User = require("../models/User");
const bcrypt= require("bcrypt"); 

exports.signUp = async (req, res) => {

    try {
        const { name, email, password } = req.body;


        // Hashing The Password

const hashedPassword = await  bcrypt.hash(password, 12);


        // CHECKING IF THE USER ALREADY EXISTS

        let existingUser;
        try {
            existingUser= await User
            .findOne({email})
        } catch (error) {
            console.log(error);
            
        }

        if(existingUser){
            return res.status(422).send("User already exists");
        }





        // CREATING A NEW USER
        const user = new User({
            name,
            email,
            password : hashedPassword,
        })

        await user.save();
   return res.status(201).send("User created successfully.");


    } catch (error) {
        console.log(error);
    }




      }

