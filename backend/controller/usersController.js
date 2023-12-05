
const Users=require("../model/users");



const fetchAllUsers=async (req,res,next)=>{
    try{
     
        const responce =await Users.find();

        const domainFilter=req.query.domainFilter
        const genderFilter=req.query.genderFilter;
        const availableFilter=req.query.availableFilter

        const filteredUser = responce.filter((user) => {


            if (genderFilter !== 'all' && user.gender.toLowerCase() !== genderFilter.toLowerCase()) {
              return false;
            }
      
            if (domainFilter !== 'all' && user.domain.toLowerCase() !== domainFilter.toLowerCase()) {
              return false;
            }
      
      
            if (availableFilter !== 'all' && user.available.toString() !== availableFilter) {
              return false;
            }
      
            return true;
          });

        res.json(filteredUser)
        
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

    const genderFilter=req.query.genderFilter
    const domainFilter=req.query.domainFilter
    const availableFilter=req.query.availableFilter




    
    try{
        const filter = {};

        if (genderFilter !=='all') {
          filter.gender = genderFilter.toLowerCase();
        }
      
        if (domainFilter != 'all') {
          filter.domain = domainFilter.toLowerCase();
        }
      
        if (availableFilter != 'all') {
          filter.available = availableFilter.toLowerCase()==="true";
        }
        console.log(filter)
      
        const responce=await Users.find(filter).limit(20).skip(skip)
        
    
        // console.log(responce)
        res.json(responce)
    }catch(err){
        console.log(err)
    }
 }
 
 module.exports={fetchAllUsers,paginatedUsers}