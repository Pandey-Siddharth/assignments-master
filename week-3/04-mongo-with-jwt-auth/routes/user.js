const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Admin, Course } = require("../db");
const { secret } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    const users = await User.create({
        username : req.body.username,
        password : req.body.password
    })
    res.json({
        message : "Created Successfully",
        data : users
    })
});

router.get('/courses', async (req, res) => {
    const a = await Course.find({});
    res.json({
        Content : a
    })
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
            msg : "User not found!"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwt_token = words[1];
    const decoded_value = jwt.verify(jwt_token,secret)
    const username = decoded_value.username
    const update = await User.updateOne({
        username : username
    },
   { $push: {
        purchased_courses : req.params.courseId
    }})
    if(update){
        res.status(200).json("Course purchased successfully")
    }
    else{
        res.status(400).json({
            msg : "User not found!"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    
});

module.exports = router