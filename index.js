
const express=require('express');
const uuid=require('uuid');
const Users=require('./api/users/User');
const app=express();
const myLogger = require('./middlewares/logger');
const usersRouter=require('./api/users/users.js');
const cors=require('cors');
const port=5000;

// const myLogger=(req,res,next)=>{
//     console.log(`${req.method}: ${req.url} ${new Date().toLocaleString()}`)
//     next();
// }

app.use(myLogger);

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors());

app.use("/users", usersRouter);

app.get("/",(req,res)=>{
    res.send('Hello World');
})

// app.get("/users",(req,res)=>{
//     res.send(Users);
// })

// app.get("/users/:userid",(req,res)=>{
//     // console.log(req.params);
//     // console.log(req.query);
//     const user=Users.find(user=> user.id===req.params.userid);
//     if(!user){
//         res.status(400).send("User not found");
//     }
//     // res.send(`User ${req.params.userid}!`)
//     res.status(200).json(user);
// })

// app.post("/users",(req,res)=>{
//     // console.log(req.body);
//     // res.send("Post request")
//     // * Create a new user

//     try{
//         const {name,active}=req.body
//         if(!name) throw new Error("Name is required");
//         if(!active) throw new Error("Active is required");
//         const user={
//             id: uuid.v4(),
//             name,
//             active
//         }
//         Users.push(user);
//         res.status(201).json(user);
//     }
//     catch(err){
//       res.status(400).send(`Invalid request: ${err.toString()}`)
//     }
// })


app.listen(port,()=>{
    console.log(`Listen on port ${port}`)
})