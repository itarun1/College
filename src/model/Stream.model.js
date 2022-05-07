const mongoose=require("mongoose")

const streamSchema=new mongoose.Schema(
    {
        college_id:{type:mongoose.Schema.Types.ObjectId,ref:"college",required:true},
        stream_name: {type:String,required:true}
    },
    {
        timestamps:true,
        versionKey:false,
    }
)
module.exports=mongoose.model("stream",streamSchema)