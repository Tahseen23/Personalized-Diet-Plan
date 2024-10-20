import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png'
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
    age: undefined,
    weight: undefined,
    goal: '',
    finalWeight: undefined,
    prefrencesFood: "",
    fitnessLevel: "",
    preferences: '',
    daysPerWeek: undefined,
    plan_duration_weeks: undefined,
    sessionDuration: undefined,
    health_conditions: ''

  })

  const navigate = useNavigate()

  const [showPass, setShowPass] = useState(false)
  const eyeToggle = () => {
    setShowPass(!showPass)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignUp = { ...signupInfo };
    if (name === 'prefrencesFood' || name === 'health_conditions' || name === 'preferences') {
      copySignUp[name] = value.split(",");
    } else {
      copySignUp[name] = value;
    }

    setSignupInfo(copySignUp);
  };


  const handleSignup = async (e) => {
    e.preventDefault()
    console.log(signupInfo)

    try {
      const url = 'http://localhost:8080/plan/signUp';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      })

      const result = await response.json(); // Parse the JSON response
      const { sucess, message } = result; // Destructure the response

      if (sucess) {
        navigate('/login'); // Navigate to login on success
      } else {
        console.error(message); // Handle any errors
      }
    } catch (err) {
      console.log(err); // Log any caught errors
    }
  }

  return (
    <div>
      <div className="p-2">
        <Link to='/' >
          <img src={logo} alt="logo" width={120} />
        </Link>

        <div className="flex flex-col gap-3 items-center">
          <div className='capitalize text-lg font-extrabold my-3 align-middle text-center mt-20'>
            <h1>SignIn</h1>
          </div>

          <form onSubmit={handleSignup}>

            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" placeholder="Enter your name..." onChange={handleChange} value={signupInfo.name} />
            <br />

            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" name="email" placeholder="Enter your email..." onChange={handleChange} value={signupInfo.email} />
            <br />

            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <div className="flex">
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type={showPass ? "text" : "password"} name="password" placeholder="Enter your password" onChange={handleChange} value={signupInfo.password} />

              <div className="-ml-5 mt-3 cursor-pointer" onClick={eyeToggle}>
                {showPass ?
                  <FaEye></FaEye> :
                  <FaEyeSlash />
                }
              </div>
            </div>
            <br />

            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your Age</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="Number" name="age" placeholder="Enter your Age..." onChange={handleChange} value={signupInfo.age} />
            <br />


            <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="Number" name="weight" placeholder="Enter your weight in kg..." onChange={handleChange} value={signupInfo.weight} />
            <br />

            <label htmlFor="goal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goal</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="goal" placeholder="What you want to Achieve" onChange={handleChange} value={signupInfo.goal} />
            <br />

            <label htmlFor="finalWeight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Final Weight</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="Number" name="finalWeight" placeholder="Target weight" onChange={handleChange} value={signupInfo.finalWeight} />
            <br />

            <label htmlFor="prefrencesFood" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Prefrences</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="prefrencesFood" placeholder="Enter with comma separated eg :Vegetarian" onChange={handleChange} value={signupInfo.prefrencesFood} />
            <br />


            <label htmlFor="fitnessLevel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fitness Level</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="fitnessLevel" placeholder="eg :Intermediate" onChange={handleChange} value={signupInfo.fitnessLevel} />
            <br />



            <label htmlFor="preferences" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Favourite gym activity</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="preferences" placeholder="Enter with comma separated eg :Weight training , cardio" onChange={handleChange} value={signupInfo.preferences} />
            <br />

            <label htmlFor="daysPerWeek" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How many Days in a Week </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="Number" name="daysPerWeek" placeholder="" onChange={handleChange} value={signupInfo.daysPerWeek} />
            <br />

            <label htmlFor="plan_duration_weeks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Week </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="Number" name="plan_duration_weeks" placeholder="" onChange={handleChange} value={signupInfo.plan_duration_weeks} />
            <br />

            <label htmlFor="sessionDuration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How many minutes you can give in a day </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="Number" name="sessionDuration" placeholder="Minutes you can give in a day..." onChange={handleChange} value={signupInfo.sessionDuration} />
            <br />

            <label htmlFor="health_conditions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Health Condition </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="health_conditions" placeholder="e.g:Lower back pain" onChange={handleChange} value={signupInfo.health_conditions} />
            <br />



            <div className="flex flex-col items-center">
              <button className="bg-red-700 rounded p-2 hover:text-neutral-500" type="submit">SignIn</button>
              <p className="mt-2">Already! have an account ?
                <Link to="/login" className="hover:text-blue-700">login</Link>
              </p>
            </div>


          </form>

        </div>
      </div>

    </div>
  )
}

export default SignUp