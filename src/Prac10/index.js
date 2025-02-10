const { error } = require("console")
const express = require("express")
const fs = require('fs')
const app = express()
const port = 3000

const userFile = JSON.parse(fs.readFileSync('../Prac10/user.json'))

// app.get('/users',(req,res)=>{
//     res.json(userFile)
// })


app.get('/users',(req,res)=>{
    fs.readFile(userFile,'utf-8',(err,data)=>{
        res.json(userFile);
        if(err){
            res.status(500).json({error:"Failed to read the data from file"})
        }
        try{
            const user = JSON.parse(data);
            res.json(user)
        }
        catch(error){
            res.status(500).json({error:"Invalid JSON format"})
        }
    })
})

// app.get('/users/:id',(req,res)=>{
//     const userId = req.params.id;
//     const user = userFile.find(user=>user.id===parseInt(userId))
//     if(!user){
//         res.status(404).send('users not found')
//     }
//     else{
//         res.json(user)
//     }
// })

app.patch('/users/:id',(req,res)=>{
    const users = JSON.parse(fs.readFileSync('../Prac10/user.json'))
    const updatedUsers = users.map(user=>{
        if(user.id===2){
            user.name = "Yash"
        }
        return user
    })
    fs.writeFileSync('users.json',JSON.stringify(updatedUsers,null,2))
    res.json({message:"User with id 2 updated Successfully!!!"})
})

// app.delete('/users/:id',(req,res)=>{
//     const users = JSON.parse(fs.readFileSync("../Prac10/users.json"))
//     const updatedUsers = users.filter(user=>{
//         user.id!==5
//     })
//     fs.writeFileSync('../Prac10/users.json',JSON.stringify(updatedUsers,null,2))
//     res.json({message:"user with id 5 deleted successfully!!!"})
// })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
