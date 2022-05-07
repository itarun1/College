
const express=require("express")
const Stream=require("../model/Stream.model")
const router=express.Router()
router.get("/:id",async(req,res)=>{
    try {
        const stream=await Stream.findById(req.params.id).lean().exec()
        return res.send(stream)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get("",async(req,res)=>{
    try {
        const stream=await Stream.find().lean().exec()
        return res.send(stream)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.post("",async(req,res)=>{
    try {
        const stream=await Stream.create(req.body)
        return res.send(stream)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const stream=await Stream.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.send(stream)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const stream=await Stream.findByIdAndDelete(req.params.id)
        return res.send(stream)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router