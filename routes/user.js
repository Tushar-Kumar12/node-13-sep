const express=require('express')
const usercontroller=require('../controllers/usercontroller')
const router= express.Router('router')

router.get('/users',(req,res)=>{
    usercontroller.getAllUsers(req,res)
})

router.get('/user/:id',(req,res)=>{
    usercontroller.getUser(req,res)
})

// router.post('/user/:id',(req,res)=>{
//     usercontroller.addUser(req,res)
// })

module.exports=router