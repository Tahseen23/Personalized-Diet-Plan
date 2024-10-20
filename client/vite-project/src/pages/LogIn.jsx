import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { useDispatch, useSelector } from "react-redux";
import { setEmail,setLogin,setPlan,setPlanTitle,setfoodPlan,setFoodTitle } from "../app/details";
const LogIn=()=>{
  const dispatch=useDispatch()
  const [showPass, setShowPass] = useState(false)
  const navigate=useNavigate()
  const email=useSelector(state=>state.detailsData.email)
  const eyeToggle = () => {
    setShowPass(!showPass)
  }

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const copyLogInInfo = { ...loginInfo };
    copyLogInInfo[name] = value;
    setLoginInfo(copyLogInInfo);
  }

  const handleLogin=async(e)=>{
    e.preventDefault()
    const url='http://localhost:8080/plan/login'
    const response=await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(loginInfo)
    })
    const result=await response.json()
    const {sucess,jwtToken,email,name,message}=result
    if (sucess){
      localStorage.setItem('token',jwtToken)
      localStorage.setItem('loggedInUser',name)
      dispatch(setEmail(email))
      dispatch(setLogin(sucess))
      getPlan(email)
      getFoodPLan(email)
      navigate('/')
    }else{
      console.log(message)
    }
  }

  async function getPlan(email){
    try{
      const token = localStorage.getItem('token');
      const url='http://localhost:8080/plan/plan'
      const response=await fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'authorization': `Bearer ${token}`
        },
        body:JSON.stringify({email})
      })
      if (!response.ok){
        console.log(response)
      }
      const result=await response.json()
      const {plan,title,content}=result
      dispatch(setPlan(plan))
      dispatch(setPlanTitle(title))
      // console.log(plan,content,title)
    }catch(err){
      console.log(err)
    }
  }

  async function getFoodPLan(email){
    try{
      const token = localStorage.getItem('token');
      const url='http://localhost:8080/plan/food'
      const response=await fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'authorization': `Bearer ${token}`
        },
        body:JSON.stringify({email})
      })
      if (!response.ok){
        console.log(response)
      }
      const result=await response.json()
      const {plan,title}=result
      dispatch(setfoodPlan(plan))
      dispatch(setFoodTitle(title))
      // console.log(plan,content,title)
    }catch(err){
      console.log(err)
    }
  }

  
  return (
    <div>
      <div className="p-2 ">
        <Link to='/'>
          <img src={logo} alt="logo" width={120} />
        </Link>

        <div className="flex flex-col gap-3 items-center">
          <div className='capitalize text-lg font-extrabold my-3 align-middle text-center mt-20'>
            <h1 className="text-white">LogIn</h1>
          </div>

          <form onSubmit={handleLogin}>

            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" name="email" placeholder="Enter your email..." onChange={handleChange} value={loginInfo.email}  />
            <br />

            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <div className="flex">

              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type={showPass ? "text" : "password"} name="password" placeholder="Enter your password" onChange={handleChange} value={loginInfo.password}  />

              <div className="-ml-5 mt-3 cursor-pointer" onClick={eyeToggle}>
                {showPass ?
                  <FaEye></FaEye> :
                  <FaEyeSlash />
                }
              </div>

            </div>
            <br />


            <div className="flex flex-col items-center">
              <button className="bg-red-700 rounded p-2 hover:text-neutral-500 text-white" type="submit">Login</button>
              <p className="mt-2 text-white">Don't have an account ?
                <Link to="/signup" className="hover:text-blue-700">signUp</Link>
              </p>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default LogIn