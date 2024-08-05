const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
     taskName:  String,
    description: String,
    status:String,
});
let product = mongoose.model("task", taskSchema)
module.exports = task;
