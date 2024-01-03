const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    User.create({
        username : req.body.username,
        password : req.body.password
    })
    res.json({
        message : "Created Successfully"
    })
});

router.get('/courses', async (req, res) => {
    const a = await Course.find({});
    res.json({
        Content : a
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
   const courseID = req.params.courseId;
   try{
   let courseExists = await Course.exixts({_id : courseID});
   if(courseExists){
       await Course.findByIdAndUpdate(courseID,{$set :{purchasedBy : req.headers.username}});
       res.status(200).json({
        message : "Successfully Purchased Course"
    })
   }
}
catch(error){
    res.status(404).json({
        message : " Course not found!"
    })
}
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    let purchasedCourses = await Course.find({purchasedBy : req.header.username})
    res.status(200).json({
        content : purchasedCourses
    })
});

module.exports = router