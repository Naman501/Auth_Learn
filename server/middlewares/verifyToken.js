const jwt = require("jsonwebtoken");    

const verifyToken = (req, res, next) => {
    const headers = req.headers["authorization"];
    // console.log(headers);
    const token = headers.split(" ")[1];
    console.log(token);
    if (!token) {
        return res.status(404).json({
            message: "Token not found",
        })
    }

    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (error, user) => {
        if (error) {
            console.log(error);
            return res.status(400).json({
                message: "Token is not valid",
            })
        }
        console.log(user);
        
        req.id = user.id;
        next();
    })

}

module.exports = verifyToken;