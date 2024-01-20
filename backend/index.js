const express =vrequire("express");
const users = require('./MOCK_DATA.json')
const app=express();

const PORT=3000;
app.get('/users',(req,res)=>{
   // console.log(`hello from server`)
    return res.json(users)//json data bhej dia hai
  //  res.send("hello home")
})
// app.get('/users/:id',(req,res)=>{
//     const id = req.params.id;
//     const user=users.find((user)=>user.id=== id);
//     return res.json(user);
    
// })
// baar baar ek hi route ko na likhkaar ek hi baar likho or usme handlers chala do jese
app.route('/users/:id')
.get((req,res)=> {const id = req.params.id;
const user=users.find((user)=>user.id=== id);
return res.json(user);})
.patch((req,res)=>{
    // edit user with id
    return res.json({status:'status pending'})
})
.delete((req,res)=>{
  // delete user with user id
  return res.json({status:`pending`})
})
app.listen(PORT,()=>{
    console.log(`server started!!! : http://localhost:3000`)
})