import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const NavBar = () =>{
    return(
      <div className="container mt-5">      
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <nav>
              <ul>
                <li>
                  <Link to="/" className="btn btn-dark">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="btn btn-dark">About</Link>
                </li>
                <li>
                  <Link to="/users" className="btn btn-dark">Users</Link>
                </li>
                <li>
                  <Link to="/newcliente" className="btn btn-dark">Nuevo Cliente</Link>
                </li>
              </ul>
        </nav>
      </div>
      <hr/>
      </div>
    )
}
export default NavBar