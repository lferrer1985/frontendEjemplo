import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
//Nav bar con Bootstrap

        <Navbar bg="light" expand="lg">
        <Container fluid>

        <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135731.png" alt="" width="30" height="24"/>
                UNAB-CV
            </a>
        </div>
        </nav> 


            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
            >
                <Link to = "/" className="nav-link">Inicio</Link>                
                <Link to = "/users" className="nav-link">Listar datos</Link>

                <Link to = "/about" className="nav-link">Acerca de Nosotros</Link>
                <Link to = "/newacademia" className="nav-link">Academia</Link>
                <Link to = "/newusuario" className="nav-link">Registro</Link>
                <Link to = "/login" className="nav-link">Iniciar Sesion</Link>
                
            </Nav>

            </Navbar.Collapse>
        </Container>
        </Navbar>

        



    //----------------------------------------------
    // Anterior Nab Var

    // <div className="btn-group gap-2 d-dm-flex">
    //     <Link to = "/" className="btn btn-dark" activeClassName="active">
    //     Home
    //     </Link>
    //     <Link to = "/Client" className="btn btn-dark">
    //     Client
    //     </Link>
    //     <Link to = "/Contact" className="btn btn-dark">
    //     Contact
    //     </Link>
    //     <Link to = "/About" className="btn btn-dark">
    //     About
    //     </Link>
    // </div>
  );
};

export default NavBar;
