const express=require("express")

const app=express()
const cors=require("cors")
const connect=require("./config/connect")
const college=require("./controller/College.controller")
const stream=require("./controller/Stream.controller")
const subject=require("./controller/Subject.controller")
   app.use(express.json())
   app.use(cors())

   app.use("/college",college)
   app.use("/stream",stream)
   app.use("/subject",subject)

app.listen(2345,async()=>{
    try {
        await connect()
        console.log("listening to port 2345")
    } catch (error) {
        console.log(error)
    }
})