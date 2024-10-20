const mongoose = require('mongoose')
const Schema = mongoose.Schema


const planSchema=new Schema({
      day:String,
      exercises:[{
        name:String,
        duration:String,
        repetitions:String,
        sets:String,
        equipment:String
      }]
    }
)


const foodSchema=new Schema({
  meal:String,
  suggestions:[{
    name:String,
    ingredients:[{
      type:String
    }]
  }]
})



const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  target: [
    {
      from: Number,
      to: Number,
      goal: String
    }
  ],
  prefrencesFood: {
    type: [String],
    required: true
  },
  fitnessLevel: {
    type: String,
    required: true
  },
  preferences: {
    type: [String],
    required: true
  },
  schedule: [
    {
      daysPerWeek: Number,
      sessionDuration: Number,
      plan_duration_weeks: Number
    }
  ],
  health_conditions: {
    type: [String],
    required: true
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  plan:[planSchema],
  food:[foodSchema],

  foodTitle:{
    type:String
  },
  foodContent:{
    type:String
  }

})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel