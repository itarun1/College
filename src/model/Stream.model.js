const mongoose=require("mongoose")

const streamSchema=new mongoose.Schema(
    {
        collegeid:{type:mongoose.Schema.Types.ObjectId,ref:"college",required:true},
        stream_name: {type:String,required:true}
    },
    {
        timestamps:true,
        versionKey:false,
    }
)
module.exports=mongoose.model("stream",streamSchema)