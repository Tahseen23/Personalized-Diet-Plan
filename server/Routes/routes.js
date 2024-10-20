const { WorkOutPlan, DietPlan } =require( '../Controllers/handleApi' )
const {Login,SignUp}=require('../Controllers/AuthController.js')
const ensure=require('../MiddleWare/authMiddle.js')



const router=require('express').Router()
router.route('/plan').post(ensure,WorkOutPlan)
router.route('/food').post(ensure,DietPlan)
router.route('/login').post(Login)
router.route('/signUp').post(SignUp)



module.exports=router