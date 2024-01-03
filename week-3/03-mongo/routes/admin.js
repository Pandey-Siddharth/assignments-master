const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin,Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    try {
        // Create a new Admin document based on the request body
        const newAdmin = await Admin.create({
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

//OST /admin/courses
//Description: Creates a new course.
// Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
// Output: { message: 'Course created successfully', courseId: "new course id" }

router.post('/courses', adminMiddleware, (req, res) => {
   let courseId = Date.now().toString(36) + Math.random().toString(36).substring(2,5);
   Course.create({
        title : req.body.title,
        id : courseId,
        description : req.body.description,
        price : req.body.price,
        imageLink : req.body.imageLink,
        createdBy : req.headers.username
   })
   res.status(200).json({message : "Course Created Successfuly",courseId : courseId});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const userName = req.headers.username;
    let a = await Course.find({createdBy : userName})
    if(a.length){
        res.status(200).json({
            a
        })
    }
    else{
        res.json({
            message : "No courses found"
        })
    }
});

module.exports = router;