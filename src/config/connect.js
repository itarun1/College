const mongoose=require("mongoose")
function connect(){
    return mongoose.connect("mongodb+srv://Tarun:tarun@cluster0.eqdah.mongodb.net/College")
}
module.exports=connect