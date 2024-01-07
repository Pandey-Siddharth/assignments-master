const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userExixts = await User.exists({username : req.headers.username,password : req.headers.password})
    if(userExixts){
        next();
    }
    else{
        res.status(404).json({message : "Invalid User"});
    }
}

module.exports = userMiddleware;