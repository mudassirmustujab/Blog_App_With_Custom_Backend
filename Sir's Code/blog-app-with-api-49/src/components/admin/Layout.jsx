import React from 'react'
import ViewUser from './ViewUser'

export default function Layout() {
  return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-2">
                <h1>Admin Panel</h1>
            </div>
            <div className="col-md-10">
                <ViewUser/>
            </div>
        </div>
    </div>

  )
}
