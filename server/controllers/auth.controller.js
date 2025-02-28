const User = require("../models/User");
const bcrypt= require("bcrypt"); 
const jwt = require("jsonwebtoken");

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

exports.logIn = async (req, res) => {
    const { email, password } = req.body;

    
        // CHECKING IF THE USER EXISTS
            let existingUser;
            try {
                existingUser= await User
                .findOne({email})
            } catch (error) {
                console.log(error);
                
            }

  
    if(!existingUser){
        return res.status(404).json(
            {
                message: "User not found",
            }
        );
    }

// CHECKING IF THE PASSWORD IS CORRECT

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    // Password is incorrect
    if(!isPasswordCorrect){
        return res.status(400).json(
            {
                message: "Invalid credentials! Please try again.",
            }
        );
    }
 


// Creating A Token

    const token = jwt.sign(
        {
             email: existingUser.email,
              id: existingUser._id },

        process.env.JWT_SECRET_KEY,

        {
         expiresIn: "1h",
         }
    );
    

    // Password is correct
    return res.status(200).json(
        {
            message: "User logged in successfully.",
            token,
        }
    );

}