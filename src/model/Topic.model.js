const mongoose=require("mongoose")

const topicSchema=new mongoose.Schema(
    {   
       
        paper_id:{type:mongoose.Schema.Types.ObjectId,ref:"paper",required:true},
        topic_name:{type:String,required:true},
        topic_code:{type:String,required:true},
        college_id:{type:mongoose.Schema.Types.ObjectId,ref:"college",required:true},
        stream_id:{type:mongoose.Schema.Types.ObjectId,ref:"stream",required:true},
        subject_id:{type:mongoose.Schema.Types.ObjectId,ref:"subject",required:true},
      
    },
    {
        timestamps:true,
        versionKey:false,
    }
)
module.exports=mongoose.model("topic",topicSchema)