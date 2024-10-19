const { WorkOutPlan, DietPlan } =require( '../Controllers/handleApi' )
const {Login,SignUp}=require('../Controllers/AuthController.js')



const router=require('express').Router()
router.route('/plan').post(WorkOutPlan)
router.route('/food').post(DietPlan)
router.route('/login').post(Login)
router.route('/signUp').post(SignUp)



module.exports=router