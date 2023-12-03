
const Users=require("../model/users");



const fetchAllUsers=async (req,res,next)=>{
    try{
        const responce =await Users.find();
        res.json(responce)
        
    }catch(err){
        console.log(err)

    }
    
 }
 const paginatedUsers=async(req,res,next)=>{
    const totalDocuments=await Users.countDocuments()
    const limit=20;
    const totalPageCount=Math.ceil(totalDocuments/limit)
    const pageNumber=req.params.pageNumber ? Number(req.params.pageNumber) : 1
    console.log(pageNumber)
    const skip= (pageNumber-1)*limit



    
    try{
        const responce=await Users.find().limit(20).skip(skip)
        
        res.json(responce)
    }catch(err){
        console.log(err)
    }
 }
 
 module.exports={fetchAllUsers,paginatedUsers}