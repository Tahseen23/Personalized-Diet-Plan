const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/generateWorkoutPlan',
  params: {noqueue: '1'},
  headers: {
    'x-rapidapi-key': '6d4d566a13msh057e31e980dac4cp1ed8a4jsn40a7c8eb14c7',
    'x-rapidapi-host': 'ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    goal: 'Build muscle',
    fitness_level: 'Intermediate',
    preferences: [
      'Weight training',
      'Cardio'
    ],
    health_conditions: ['None'],
    schedule: {
      days_per_week: 4,
      session_duration: 60
    },
    plan_duration_weeks: 4,
    lang: 'en'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}