const jwt = require("jsonwebtoken");
const {secret} = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwt_token = words[1];
    console.log(jwt_token);
    console.log(secret);
    const decoded_value = jwt.verify(jwt_token,secret)
    if(decoded_value.username){
        next();
    }
    else{
        res.status(403).json({
            msg : "You are not authenticated"
        })
    }
}

module.exports = adminMiddleware;