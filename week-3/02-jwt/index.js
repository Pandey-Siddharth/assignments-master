const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');


let usernameS = zod.string().email();
let passS = zod.string().min(6);


function signJwt(username, password) {
    let usernameResponse = usernameS.safeParse(username);
    let passwordResponse = passS.safeParse(password);
    if(!usernameResponse.success  || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username
    },jwtPassword);
    return signature;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try{
    jwt.verify(token,jwtPassword);
    return true;
    }
    catch{
        return false;
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    let decode = jwt.decode(token);
    if(!decode){
        return false;
    }
    return true;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
