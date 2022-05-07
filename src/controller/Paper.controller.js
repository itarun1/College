
const express=require("express")
const Paper=require("../model/Paper.model")
const router=express.Router()
router.get("/:id",async(req,res)=>{
    try {
        const paper=await Paper.findById(req.params.id).lean().exec()
        return res.send(paper)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get("",async(req,res)=>{
    try {
        const paper=await Paper.find().lean().exec()
        return res.send(paper)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.post("",async(req,res)=>{
    try {
        const paper=await Paper.create(req.body)
        return res.send(paper)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const paper=await Paper.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.send(paper)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const paper=await Paper.findByIdAndDelete(req.params.id)
        return res.send(paper)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router