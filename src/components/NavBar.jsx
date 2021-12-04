import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button,img,a } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
//Nav bar con Bootstrap

        <Navbar bg="light" expand="lg">
        <Container fluid>

        <nav class="navbar navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/">
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
                <Link to = "/newusuario" className="nav-link">Cargar datos</Link>
                <Link to = "/users" className="nav-link">Listar datos</Link>
                
                <NavDropdown title="+ Datos" id="navbarScrollingDropdown">
                <NavDropdown.Item ><Link to = "/about" className="nav-link">Acerca de Nosotros</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to = "/newacademia" className="nav-link">Academia</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to = "/Login" className="nav-link">Iniciar Sesion</Link></NavDropdown.Item>
                </NavDropdown>
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
