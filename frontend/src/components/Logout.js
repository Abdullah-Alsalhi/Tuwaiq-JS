import React from 'react'
import { Link } from "react-router-dom";
export default function Logout() {
  return (
    
    <div className='Logout border border-dark'>

      <form action="" className="col-auto">
          <h3 className="m-3 text-center blockquote p-3 mb-2 bg-dark.bg-gradient text-dark shadow-sm p-3 mb-5 bg-body rounded mb-5 border border-primary"  ><b>You Logged Out</b></h3>
          <h5 className="bg-light">Todo App Is Happy To Help You Managing Your Duties</h5>
          
          <Link to="/login" className="m-3 btn btn-sm btn-outline-success">back to login page?</Link>
          <button className="btn btn-sm btn-outline-info" >contact us</button>
        </form>
    </div>
  )
}
