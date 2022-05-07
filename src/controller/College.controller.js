
const express=require("express")
const College=require("../model/College.model")
const router=express.Router()
router.get("/:id",async(req,res)=>{
    try {
        const college=await College.findById(req.params.id).lean().exec()
        return res.send(college)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get("",async(req,res)=>{
    try {
        const college=await College.find().lean().exec()
        return res.send(college)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.post("",async(req,res)=>{
    try {
        const college=await College.create(req.body)
        return res.send(college)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const college=await College.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.send(college)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const college=await College.findByIdAndDelete(req.params.id)
        return res.send(college)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router