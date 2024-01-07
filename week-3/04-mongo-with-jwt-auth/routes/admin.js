const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken")
const {secret} = require("../config")


router.post('/signup', async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const newAdmin = await Admin
        .create({
            username: req.body.username,
            password: req.body.password
        });
        // Send a success response if the document is created successfully
        res.status(200).json({ message: "Created successfully", data: newAdmin });
    } catch (error) {
        // Handle errors and send an appropriate error response
        console.error('Error creating Admin:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
        username : username,
        password : password
    })
    if(user){
        const token = jwt.sign({
            username
        },secret)
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            msg : "Admin not found!"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    //let courseId = Date.now().toString(36) + Math.random().toString(36).substring(2,5);
    const course = Course.create({
         title : req.body.title,
         description : req.body.description,
         price : req.body.price,
         imageLink : req.body.imageLink,
    })
    res.status(200).json({message : "Course Created Successfuly",courseId : course._id});
 });

router.get('/courses', adminMiddleware, (req, res) => {

});

module.exports = router;