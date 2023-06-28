import mongoose from "mongoose";
 
//Defining Schema

const studentSchema= new mongoose.Schema({
    name:{type:'String'},
    age:{type:'Number'},
    fees:{type:'Number'}
})



//Model
const StudentModel= mongoose.model("student",studentSchema)

export default StudentModel