import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

    let baseURL = "http://localhost:8000";
    const [userData,setuserData] = useState({})
    const navigate = useNavigate()
    const handleSubmit = function (event){

        event.preventDefault();

        (async () => {
            try {
                await fetch(`${baseURL}/api/v1/user/register` ,{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(userData)
                });
    
                navigate('/login')
                
            } catch (error) {
                console.log("error",error);
            }

        })();




    }


  return (
    <div className="container">
        <div className="row justify-content-center" style={{minHeight:'100vh'}}>
            <div className="col-md-6">
                <div className="card  bg-dark text-light p-5">
                    <h3 className='text-center'>Register</h3>
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                        <input type="text" className='my-2 form-control' placeholder='Enter Username' onChange={(e)=>{setuserData({...userData,username:e.target.value})}}/>
                        <input type="text" className='my-2 form-control' placeholder='Enter Email' onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
                        <input type="text" className='my-2 form-control' placeholder='Enter Password' onChange={(e)=>{setuserData({...userData,password:e.target.value})}}/>
                        <input type="submit" value="Register" className='btn btn-primary w-100' />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
