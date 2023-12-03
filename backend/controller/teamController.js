const Team=require("../model/team");


const addUserToTeam= async(req,res,next)=>{
    try{
        const responce=await Team.create(req.body)

        res.json({status:"success",
    body:req.body
})

        
    }catch(err){{

    }}


}

const fetchTeam= async (req,res,next)=>{
    try{
        const responce=await Team.find()
        res.json(responce)
    }catch{
        console.log(err)
    }
}


module.exports={addUserToTeam,fetchTeam}