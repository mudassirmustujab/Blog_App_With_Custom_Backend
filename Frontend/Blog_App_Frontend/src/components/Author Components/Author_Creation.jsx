import React from 'react'

export default function Author_Creation() {

  
  const authorCreation =  async ()=>{
    try {
      
    
    const firstRes = await fetch('http://localhost:8000/author/create',
      {
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem('myAuth')
        }
      }
    )
    const data = await firstRes.json()
    console.log('res from author creation', data)

    } catch (error) {
      console.log(error,'error in aurhor creation')
    }
  }
 
  return (
    <>
    
    <div>Author Creation</div>


    <button onClick={authorCreation}>Create Author</button>
    
    </>
  )
}
