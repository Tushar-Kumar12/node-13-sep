const express=require('express')
const usercontroller=require('../controllers/usercontroller')
const router= express.Router('router')

router.get('/users',(req,res)=>{
    usercontroller.getAllUsers(req,res)
})

router.post('/user/:id')

module.exports=router