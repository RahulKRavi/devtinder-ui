import { useState } from "react";
import axios from "axios";
import {BASE_URL} from '../utils/constants'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  async function handleClick() {
    try {
      if(isLogin){
        const res = await axios.post(
          BASE_URL + '/login',
          {
            email,password
          },
          {
            withCredentials: true
          })
          dispatch(addUser(res?.data?.data))
          navigate('/feed')
      } else {
        const res = await axios.post(
          BASE_URL + '/signup',
          {
            firstName,lastName,email,password
          },
          {
            withCredentials: true
          })
          dispatch(addUser(res?.data?.data))
          navigate('/profile')
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-300 shadow-sm my-14">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
          </div>
          <fieldset className="fieldset">
            {!isLogin && (
              <>
                {" "}
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <legend className="fieldset-legend">LastName</legend>
                <input
                  type="text"
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            )}
            <legend className="fieldset-legend">Email Id:</legend>
            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="mt-6">
            <button className="btn btn-primary btn-block" onClick={handleClick}>
              {isLogin ? "LOGIN":"SIGN-UP"}
            </button>
            <p className="cursor-pointer text-success text-center mt-5" onClick={()=>setIsLogin(!isLogin)}>
              {isLogin ? "New User? Create An Account ":"Already Have An Account? Login Here"}
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Login