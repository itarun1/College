const mongoose=require("mongoose")

const paperSchema=new mongoose.Schema(
    {   
        subject_id:{type:mongoose.Schema.Types.ObjectId,ref:"subject",required:true},
        paper_type: {type:String,required:true},
        paper_name: {type:String,required:true},
        paper_code: {type:String,required:true},
        college_id:{type:mongoose.Schema.Types.ObjectId,ref:"college",required:true},
        stream_id:{type:mongoose.Schema.Types.ObjectId,ref:"stream",required:true},
      
    },
    {
        timestamps:true,
        versionKey:false,
    }
)
module.exports=mongoose.model("paper",paperSchema)