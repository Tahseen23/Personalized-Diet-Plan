const UserModel = require('../Models/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SignUp = async (req, res) => {
  try {
    const { name, email, password, age, weight, goal, initialWeight, finalWeight, prefrencesFood, fitnessLevel, preferences, daysPerWeek, plan_duration_weeks,sessionDuration, health_conditions } = req.body
    const user = await UserModel.findOne({ email })
    if (user) {
      return res.status(404).json({ message: 'User Already Exists', sucess: false })
    }
    const target =
    {
      goal: goal,
      from: initialWeight,
      to: finalWeight
    }

    const schedule = {
      daysPerWeek: daysPerWeek,
      plan_duration_weeks: plan_duration_weeks,
      sessionDuration:sessionDuration
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const userModel = new UserModel({ name, email, age, password: hashPassword, weight, target, prefrencesFood, fitnessLevel, preferences, schedule, health_conditions })

    await userModel.save()
    return res.status(201).json({ message: 'SignUp Sucess', sucess: true })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Some Error Occured', sucess: false })
  }
}


const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })
    const errorMsg = 'Auth failed email or password is wrong'
    if (!user) {
      return res.status(403).json({ message: errorMsg, sucess: false })
    }
    const isPassEqual = await bcrypt.compare(password, user.password)
    if (!isPassEqual) {
      return res.status(403).json({ message: errorMsg, sucess: false })
    }
    const jwtToken = jwt.sign({ email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )
    const name = user.name
    res.status(200).json({ message: 'Login sucesss', sucess: true, jwtToken, email, password, name })
  } catch (err) {
    res.status(500).json({
      message: 'Internal Server Error',
      sucess: false
    })

  }

}


module.exports = {
  SignUp,
  Login
}