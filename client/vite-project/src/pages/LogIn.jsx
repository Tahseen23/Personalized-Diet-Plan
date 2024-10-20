import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
const LogIn=()=>{

  const [showPass, setShowPass] = useState(false)
  const eyeToggle = () => {
    setShowPass(!showPass)

  }
  
  return (
    <div>
      <div className="p-2">
        <Link to='/'>
          <img src={logo} alt="logo" width={120} />
        </Link>

        <div className="flex flex-col gap-3 items-center">
          <div className='capitalize text-lg font-extrabold my-3 align-middle text-center mt-20'>
            <h1>LogIn</h1>
          </div>

          <form>

            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" name="email" placeholder="Enter your email..."  />
            <br />

            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <div className="flex">

              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type={showPass ? "text" : "password"} name="password" placeholder="Enter your password"  />

              <div className="-ml-5 mt-3 cursor-pointer" onClick={eyeToggle}>
                {showPass ?
                  <FaEye></FaEye> :
                  <FaEyeSlash />
                }
              </div>

            </div>
            <br />


            <div className="flex flex-col items-center">
              <button className="bg-red-700 rounded p-2 hover:text-neutral-500" type="submit">Login</button>
              <p className="mt-2">Don't have an account ?
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