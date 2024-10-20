import { setEmail, setLogin } from "../app/details";
import { useSelector } from "react-redux";
import logo from '../assets/logo.png'
import Plan from '../Components/Plan.jsx'
const Home = () => {
  const login = useSelector(state => state.detailsData.login)

  return (
    <div>
      <div className="mt-28 bg-custom-hover h-screen">
        <div className="flex flex-row gap-44">
          <img src={logo} alt="" />
          <div className="mt-40 text-5xl font-semibold">
            {login ?
                <h1>Good To see You Lets Continue</h1>
              :
              <h1>You needs to Login First</h1>
            }
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Plan></Plan>
      </div>
    </div>
  )
}

export default Home