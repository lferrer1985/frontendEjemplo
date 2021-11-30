import React from "react";
import * as ReactBootStrap from "react-bootstrap"
import NavBar from "../components/NavBar";
import TableUsuarios from "../components/TableUsuarios";
const Usuarios = () => {
    return (
        <ReactBootStrap.Container>
            <NavBar/>
            <ReactBootStrap.Form>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Form.Control placeholder="Ingresa Busqueda">

                        </ReactBootStrap.Form.Control>
                    </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs="auto" className="my-1">
                            <ReactBootStrap.Form.Select xs="auto" className="me-sm-2" id="filtro">
                                <option value="0"></option>
                                <option value="1">Id</option>
                                <option value="2">Nombre</option>
                                <option value="3">Apellido</option>
                            </ReactBootStrap.Form.Select>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Button type="submit">Buscar
                        </ReactBootStrap.Button>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1 d-md-flex justify-content-md-end">
                        <ReactBootStrap.Button className="btn-success" type="submit">Agregar
                        </ReactBootStrap.Button>
                    </ReactBootStrap.Col>

                </ReactBootStrap.Row>
            </ReactBootStrap.Form>
            
            <TableUsuarios/>
        </ReactBootStrap.Container> 
    )
}
export default Usuarios