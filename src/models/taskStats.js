import mongoose,{Schema} from "mongoose";
const  TaskStats=new Schema({
    id:{type:mongoose.Schema.ObjectId,ref:"User"},
    totalTask:{type:Number,default:0},
    totalSuccessTask:{type:Number,default:0},
    totalPendingTask:{type:Number,default:0},
    totalCreateTask:{type:Number,default:0},
    totalDeleteTask:{type:Number,default:0},
},{timestamps:true})
const taskStats=mongoose.model("TaskStats",TaskStats)
export default taskStats;