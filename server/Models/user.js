const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  weight:{
    type:Number,
    required:true
  },
  target:[
    {
      from:Number,
      to:Number,
      goal:String
    }
  ],
  prefrencesFood:{
    type:[String],
    required:true
  },
  fitnessLevel:{
    type:String,
    required:true
  },
  preferences:{
    type:[String],
    required:true
  },
  schedule:[
    {
      daysPerWeek:Number,
      sessionDuration:Number,
      plan_duration_weeks:Number
    }
  ],
  health_conditions:{
    type:[String],
    required:true
  }

})

const userModel=mongoose.model('users',userSchema)
module.exports=userModel