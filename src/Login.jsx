import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleClick() {
    try {
      const res = await axios.post(
        'http://localhost:2222/login',
        {
          email,password
        },
        {
          withCredentials: true
        })
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-300 shadow-sm my-14">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold">Login</h2>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Id:</legend>
            <input
              type="text"
              className="input"
              placeholder="example@xyz.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <legend className="fieldset-legend">Password</legend>
            <input 
              type="text" 
              className="input" 
              placeholder="Type here"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
            />
          </fieldset>
          <div className="mt-6">
            <button className="btn btn-primary btn-block" onClick={handleClick}>Login</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Login