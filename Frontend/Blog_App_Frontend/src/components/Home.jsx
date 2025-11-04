import React from 'react'

function Home() {
React.useEffect(() => {
  

  
  (async () => {
    
    try {
     let response =  await fetch('http://localhost:8000/user/', {
     method:'GET',
      headers:{
      'Authorization':localStorage.getItem('authToken')
      }
     })
      console.log('Token sent from homepage: ',JSON.parse( response.body))
  
      
    } catch (error) {
      console.log('error from home component fetch get request',error)
    }
  })()
}, [])

  return (  
    <div>Home</div>

  )
}

export default Home