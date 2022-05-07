
const mongoose=require("mongoose")

const collegeSchema=new mongoose.Schema(
    {
    name:{type:String,required:true},
    type: {type:String,required:true},
    state: {type:String,required:true},
    district: {type:String,required:true},
    city:{type:String,required:true},
    },
    {
        timestamps:true,
        versionKey:false,
    }
)
module.exports=mongoose.model("college",collegeSchema)