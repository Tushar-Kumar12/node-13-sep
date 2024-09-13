const users=require('../users.json')
const fs=require('fs')

function getAllUsers(req,res){
    try {
        res.json(users)
        
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

function getUser(req,res){
    try {
        let id = parseInt(req.params.id)
        let user = users.find((user)=> user.id===id)
        res.json(user)
    } catch (error) {
        res.json(err)
    }
}

// function  addUser(req,res){
//     try {
//         console.log(req.body)
//         req.body.id=users.length+1
//         users.push(req.body)
//         fs.writeFile('users.json',JSON.stringify(users),(err)=>{

//         })
//     } catch (err) {
//         res.json(err)
//     }
// }

module.exports={
    getAllUsers,
    getUser
    //addUser
}