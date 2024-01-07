const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://DrousyGinger:csaNddD4QDQJpbOZ@cluster0.mjwmcid.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password:String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password:String
});

const CourseSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    price: Number, 
    imageLink:String,
    createdBy :String,
    purchasedBy : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}