const mongoose=require("mongoose")

const subjectSchema=new mongoose.Schema(
    { 
        stream_id:{type:mongoose.Schema.Types.ObjectId,ref:"stream",required:true},
        subject_name:{type:String,required:true},
        collegeid:{type:mongoose.Schema.Types.ObjectId,ref:"college",required:true},
    },
    {
        timestamps:true,
        versionKey:false,
    }
)
module.exports=mongoose.model("subject",subjectSchema)