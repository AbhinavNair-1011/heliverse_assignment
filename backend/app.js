const express = require("express")
const app = express()
const cors=require("cors")

const connectToDatabase=require("./database/dbConnect");

const users=require("./routes/users")
const team = require("./routes/team")

app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
res.send("api running on port 3000")
});

app.use(users)
app.use(team)

connectToDatabase(()=>{
    app.listen(3000,()=>{
        console.log("api running on port 3000")
    })
})


