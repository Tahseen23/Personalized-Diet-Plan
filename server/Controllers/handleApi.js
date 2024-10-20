const axios = require('axios');
const UserModel = require('../Models/user.js')
const api=process.env.API_KEY

const WorkOutPlan = async (req, res) => {
  const { email } = req.body
  const user = await UserModel.findOne({ email })
  if (user.plan && user.plan.length!=0){
    console.log('user.plan')
    return res.status(200).json({plan:user.plan,title:user.title,content:user.content})
  }
  const goal = user.target[0].goal
  const fitnessLevel = user.fitnessLevel
  const preferences = user.preferences
  const healthConditions = user.health_conditions
  const perWeek = user.schedule[0].daysPerWeek
  const sessionDuration = user.schedule[0].sessionDuration
  const plan_duration_weeks = user.schedule[0].plan_duration_weeks

  console.log(goal,plan_duration_weeks,preferences,healthConditions)


  const options = {
    method: 'POST',
    url: 'https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/generateWorkoutPlan',
    params: { noqueue: '1' },
    headers: {
      'x-rapidapi-key': api,
      'x-rapidapi-host': 'ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      goal: goal,
      fitness_level: fitnessLevel,
      preferences: preferences,
      health_conditions: healthConditions,
      schedule: {
        days_per_week: perWeek,
        session_duration: sessionDuration
      },
      plan_duration_weeks: plan_duration_weeks,
      lang: 'en'
    }
  };

  try {
    console.log("I am here")
    const response = await axios.request(options);
    console.log(response.data);
    
    user.plan=response.data.result.exercises
    console.log(user.plan)


    user.content=response.data.result.seo_content
    user.title=response.data.result.seo_title
    await user.save();
    return res.status(200).json({plan:user.plan,title:user.title,content:user.content})
  } catch (error) {
    console.error(error);
  }
}

const DietPlan = async (req, res) => {
  const { email } = req.body
  const user = await UserModel.findOne({ email })
  if (user.food.length!=0){
    console.log('user.plan')
    return res.status(200).json({plan:user.food,title:user.foodTitle,content:user.foodContent,sucess:true})
  }
  const goal = user.target[0].goal
  const currentWeight=user.target[0].from
  const targetWeight=user.target[0].to
  const fitnessLevel = user.fitnessLevel
  const preferencesFood = user.preferencesFood

  const options = {
    method: 'POST',
    url: 'https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/nutritionAdvice',
    params: { noqueue: '1' },
    headers: {
      'x-rapidapi-key': api,
      'x-rapidapi-host': 'ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      goal: goal,
      dietary_restrictions: preferencesFood,
      current_weight: currentWeight,
      target_weight: targetWeight,
      daily_activity_level: fitnessLevel,
      lang: 'en'
    }
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    user.food=response.data.result.meal_suggestions
    user.foodTitle=response.data.result.seo_title
    user.foodContent=response.data.result.seo_content
    await user.save();
    return res.status(200).json({plan:user.food,title:user.foodTitle,content:user.foodContent,sucess:true})
    
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  WorkOutPlan,
  DietPlan
}
