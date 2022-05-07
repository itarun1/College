const express=require("express")

const app=express()
const cors=require("cors")
const connect=require("./config/connect")
const college=require("./controller/College.controller")

   app.use(express.json())
   app.use(cors())

   app.use("/college",college)

app.listen(2345,async()=>{
    try {
        await connect()
        console.log("listening to port 2345")
    } catch (error) {
        console.log(error)
    }
})