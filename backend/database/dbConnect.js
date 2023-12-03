const mongoose =require("mongoose");

const connectToDatabase=async (cb)=>{
try{
    const responce=await mongoose.connect("mongodb+srv://abhinav:abhinav@cluster0.e28id4i.mongodb.net/assignment?retryWrites=true&w=majority")
    console.log("database running")
    cb()
}catch(err){
console.log(err)
}

}

module.exports=connectToDatabase