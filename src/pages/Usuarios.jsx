import React from "react";
import * as ReactBootStrap from "react-bootstrap"
import NavBar from "../components/NavBar";
import TableUsuarios from "../components/TableUsuarios";
const Usuarios = () => {
    return (
        <ReactBootStrap.Container>
            <NavBar/>
            
            
            <TableUsuarios/>
        </ReactBootStrap.Container> 
    )
}
export default Usuarios