

const express=require('express');
const uuid=require('uuid');
const Users=require('./User.js');
const router=express.Router();

router.get("/",(req,res)=>{
    res.send(Users);
})

router.get("/:userid",(req,res)=>{
    const user = Users.find((user) => user.id === Number(req.params.userid));
    if(!user){
        res.status(400).send("User not found");
    }
    res.status(200).json(user);
})

router.post("/",(req,res)=>{
    // * Create a new user
    try{
        const {name,active}=req.body
        if(!name) throw new Error("Name is required");
        if(!active) throw new Error("Active is required");
        const user={
            id: uuid.v4(),
            name,
            active
        }
        Users.push(user);
        res.status(201).json(user);
    }
    catch(err){
      res.status(400).send(`Invalid request: ${err.toString()}`)
    }
})

module.exports = router;