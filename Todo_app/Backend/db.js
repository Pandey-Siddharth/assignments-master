const mongoose = require("mongoose");
//mongodb+srv://DrousyGinger:csaNddD4QDQJpbOZ@cluster0.mjwmcid.mongodb.net/

mongoose.connect("mongodb+srv://DrousyGinger:csaNddD4QDQJpbOZ@cluster0.mjwmcid.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title : String,
    description :String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}