import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

       let baseURL = "http://localhost:8000";
        const [userData,setuserData] = useState({})
        
        const navigate = useNavigate()
        const handleSubmit = function (event){
    
            event.preventDefault();
    
            (async () => {
                try {
                    const response = await fetch(`${baseURL}/api/v1/user/signin`, {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify(userData),
                    });

                    const {data} = await response.json()
                    
                    localStorage.setItem("myToken", data.user_token);
                    
        
                    navigate('/admin')
                    
                } catch (error) {
                    console.log("error",error);
                }
    
            })();
    
    
    
    
        }


  return (
    <div className="container">
      <div
        className="row justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-6">
          <div className="card  bg-dark text-light p-5">
            <h3 className="text-center">Login</h3>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
              <input
                type="email"
                className="my-2 form-control"
                placeholder="Enter Email"
                onChange={(e)=>{setuserData({...userData,email:e.target.value})}}
              />
              <input
                type="password"
                className="my-2 form-control"
                placeholder="Enter Password"
                onChange={(e)=>{setuserData({...userData,password:e.target.value})}}
              />
              <input
                type="submit"
                value="Login"
                className="btn btn-primary w-100"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
