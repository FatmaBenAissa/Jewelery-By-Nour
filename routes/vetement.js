const express =require('express');
const vetement = require('../models/vetement');
const vetementRouter =express.Router()

// ADD A NEW USER TO THE DATABASE 
vetementRouter.post('/add',async(req,res)=>{
    try {
        const newaccessoire = new accessoire(req.body)
        let result = await newaccessoire.save()
        res.send({accessoire:result, msg:'accessoire added successfully'})
    } catch (error) {
        console.log(error)
    }
})
// RETURN ALL USERS
vetementRouter.get("/",async(req,res)=>{
    try{
        let result = await vetement.find();
        res.send({vetements:result,msg:'all vetements'});
    }catch(error){
    console.log(error);
    }
    })
    // RETURN USER BY ID
    vetementRouter.get("/:id",async(req,res)=>{
        try{
            let result = await vetement.findById({_id:req.params.id});
            res.send({vetement:result,msg:'vetement'});
        }catch(error){
        console.log(error);
        }
    })
    // REMOVE A USER BY ID 
    vetementRouter.delete("/:id",async(req,res)=>{
        try{
            let result = await vetement.findByIdAndDelete({_id:req.params.id});
            res.send({msg:'vetement deleted'});
        }catch(error){
        console.log(error);
        }
    })
    //EDIT A USER BY ID  
    vetementRouter.put("/:id",async(req,res)=>{
        try{
            let result = await vetement.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
            res.send({msg:'vetement updated'});
        }catch(error){
        console.log(error);
        }
    })
module.exports = vetementRouter;