const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://DrousyGinger:csaNddD4QDQJpbOZ@cluster0.mjwmcid.mongodb.net/Course_App');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchased_courses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }
    ]
});

const CourseSchema = new mongoose.Schema({
    description:String,
    title:String,
    price:Number,
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}