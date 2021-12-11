import axios from "axios";
import React, {useState} from "react";
import {Container,  Form} from "react-bootstrap";
import NavBar from "../components/NavBar";
import Swal from 'sweetalert2'

const NewAcademia = () => {
    
    const id = localStorage.getItem('user');
    
    const [data , setData] = useState({
        id:id,
        nivel:"",
        titulo:"",
        anio:"",
        estado:""
    });
    

    const handleChange =  ({target}) => {
        setData({
            ...data,
            [target.name]:target.value
        })
        console.log(data);
    }

    const baseURL="localhost:8080/api/usuario/login/";
    console.log(baseURL);
    

    return (
        <Container>
            <NavBar/>
            <h3 className="text-center">Registrar Estudios</h3>
            <Container className="col-md-5 mx-auto">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    name="nivel"
                    placeholder="Nivel de estudios"
                    required
                    value={data.nivel}
                    onChange={handleChange}
                    >
                    </Form.Control >
                </Form.Group >
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    name="titulo"
                    placeholder="Titulo obtenido"
                    required
                    value={data.titulo}
                    onChange={handleChange}
                    >
                    </Form.Control >
                </Form.Group >
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    name="anio"
                    placeholder="Año terminación"
                    required
                    value={data.anio}
                    onChange={handleChange}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    name="estado"
                    placeholder="Finalizado o En curso"
                    required
                    value={data.estado}
                    onChange={handleChange}
                    >
                    </Form.Control>
                </Form.Group>                
                <button className="btn btn-success" onClick={''}>Guardar</button>
            </Form>
            
        </Container>
        </Container>
    )

}
export default NewAcademia