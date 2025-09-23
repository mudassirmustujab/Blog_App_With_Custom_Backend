import React, { useEffect, useState } from "react";
import { Select } from 'antd';
export default function ViewUser() {
  let baseURL = "http://localhost:8000"
  const [userData, setuserData] = useState("")
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${baseURL}/api/v1/user/`, {
          method: "GET",
          headers: { Authorization: `bearer ${localStorage.getItem("myToken")}` }
        });
        const { data } = await response.json()
        setuserData(data)
      }
      catch (error) {
        console.log(error);

      }
    })();


  }, [])

  let options =[
    { value: 'admin', label: 'Admin' },
    { value: 'author', label: 'Author' },
    { value: 'reader', label: 'Reader' },
    { value: 'guest', label: 'Guest' },
  ]

  const handleRole = async(role,userId)=>{

    try {

      await fetch(`${baseURL}/api/v1/user/role/${userId}`,{
        method:"PATCH",
        headers :{"Authorization":`bearer ${localStorage.getItem('myToken')}`,"content-type":"application/json"},
        body:JSON.stringify({role})
      })
      
    } catch (error) {

      console.log(error.message)
    }

  }

  return (
    <table className="table table-striped">
      <thead>
        <td>Username</td>
        <td>Email</td>
        <td>Role</td>
        <td>Actions</td>
      </thead>

      {userData &&
        userData.map((user) => (
          <tr>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              {/* {user.role} */}
              <Select
                showSearch
                placeholder="Select a person"
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options = {options}

                onChange={function(value){ handleRole(value,user.id)}}
              />
            </td>
            <td></td>
          </tr>
        ))}
    </table>
  );
}
