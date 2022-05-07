
const express=require("express")
const Topic=require("../model/Topic.model")
const router=express.Router()
router.get("/:id",async(req,res)=>{
    try {
        const topic=await Topic.findById(req.params.id).lean().exec()
        return res.send(topic)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get("",async(req,res)=>{
    try {
        const topic=await Topic.find().lean().exec()
        return res.send(topic)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.post("",async(req,res)=>{
    try {
        const topic=await Topic.create(req.body)
        return res.send(topic)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const topic=await Topic.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.send(topic)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const topic=await Topic.findByIdAndDelete(req.params.id)
        return res.send(topic)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router