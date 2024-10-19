const axios = require('axios');
const UserModel = require('../Models/user.js')

const WorkOutPlan = async (req, res) => {
  const { email } = req.body
  const user = await UserModel.findOne({ email })
  const goal = user.target[0].goal
  const fitnessLevel = user.fitnessLevel
  const preferences = user.preferences
  const healthConditions = user.health_conditions
  const perWeek = user.schedule[0].daysPerWeek
  const sessionDuration = user.schedule[0].sessionDuration
  const plan_duration_weeks = user.schedule[0].plan_duration_weeks


  const options = {
    method: 'POST',
    url: 'https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/generateWorkoutPlan',
    params: { noqueue: '1' },
    headers: {
      'x-rapidapi-key': '6d4d566a13msh057e31e980dac4cp1ed8a4jsn40a7c8eb14c7',
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
    const response = await axios.request(options);
    console.log(response.data);
    return res.status(200).json({ response: response.data })
  } catch (error) {
    console.error(error);
  }
}

const DietPlan = async (req, res) => {
  const { email } = req.body
  const user = await UserModel.findOne({ email })
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
      'x-rapidapi-key': '6d4d566a13msh057e31e980dac4cp1ed8a4jsn40a7c8eb14c7',
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
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  WorkOutPlan,
  DietPlan
}