import mongoose ,{Schema}from "mongoose";

const TaskSchema=new Schema({
    id:{type:mongoose.Schema.ObjectId,ref:"User"},
    title:{type:String,required:true},
    descriptions:{type:String},
    category:{type:String,},
    status:{type:String,enum:["pannding","success","deleted","reject"],default:"pannding"},
    taskDate:{type:Date,required:true}

},{timestamps:true})
const task=mongoose.model("Task",TaskSchema)
export default task;