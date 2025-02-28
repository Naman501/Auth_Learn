const User = require("../models/User.js");

exports.getUser = async (req, res) => {

    const userId = req.id;
    let user;
    try {
        
        user = await User.findById(userId).select("-password");
        console.log(user);

    } catch (error) {
        console.log(error.messsage);
        return res.status(500).json({
            message: "Internal server error",
        })
        
    }
     if(!user){
            return res.status(404).json({
                message: "User not found",
            })
        }
    res.status(200).json({
        message: user,
    })
    
        
}