
const express=require("express")
const Subject=require("../model/Subject.model")
const router=express.Router()
router.get("/:id",async(req,res)=>{
    try {
        const subject=await Subject.findById(req.params.id).lean().exec()
        return res.send(subject)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get("",async(req,res)=>{
    try {
        const subject=await Subject.find().lean().exec()
        return res.send(subject)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.post("",async(req,res)=>{
    try {
        const subject=await Subject.create(req.body)
        return res.send(subject)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const subject=await Subject.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.send(subject)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const subject=await Subject.findByIdAndDelete(req.params.id)
        return res.send(subject)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router