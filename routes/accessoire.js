const express =require('express');
const accessoire = require('../models/accessoires');
const accessoireRouter =express.Router()

// ADD A NEW USER TO THE DATABASE 
accessoireRouter.post('/add',async(req,res)=>{
    try {
        const newaccessoire = new accessoire(req.body)
        let result = await newaccessoire.save()
        res.send({accessoire:result, msg:'accessoire added successfully'})
    } catch (error) {
        console.log(error)
    }
})
// RETURN ALL USERS
accessoireRouter.get("/",async(req,res)=>{
    try{
        let result = await accessoire.find();
        res.send({accessoires:result,msg:'all accessoires'});
    }catch(error){
    console.log(error);
    }
    })
    // RETURN USER BY ID
    accessoireRouter.get("/:id",async(req,res)=>{
        try{
            let result = await accessoire.findById({_id:req.params.id});
            res.send({accessoire:result,msg:'accessoire'});
        }catch(error){
        console.log(error);
        }
    })
    // REMOVE A USER BY ID 
    accessoireRouter.delete("/:id",async(req,res)=>{
        try{
            let result = await accessoire.findByIdAndDelete({_id:req.params.id});
            res.send({msg:'accessoire deleted'});
        }catch(error){
        console.log(error);
        }
    })
    //EDIT A USER BY ID  
    accessoireRouter.put("/:id",async(req,res)=>{
        try{
            let result = await accessoire.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
            res.send({msg:'accessoire updated'});
        }catch(error){
        console.log(error);
        }
    })
module.exports=accessoireRouter;