const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const TaskSchema=new Schema({
    id:String,
    user:String,
    taskName:String,
    dueDate:String,
    description:String,
    priority:String,
    completed:Boolean,
})

module.exports=mongoose.model('Task',TaskSchema)