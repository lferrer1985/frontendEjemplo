import axios from "axios";
import Swal from "sweetalert2";
import React, {useState} from "react";
import { useHistory } from 'react-router'
import {Container,  Form} from "react-bootstrap";
import NavBar from "../components/NavBar";

const NewCliente = () => {
    
    const history = useHistory();
    
    const [data , setData] = useState({nombre:"",apellido:"",telefono:"",puntos:""})

    

    const handleChange =  ({target}) => {
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    const URL="http://localhost:8080/api/cliente";
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL, data);
        
        console.log(response,response.data);

        if(response.status === 200){
            Swal.fire(
                "Guardado!",
                `El Registro ${response.data.id} ha sido guardado con exito!`,
                "success"
            )
            history.push("\cliente")
        }else{
            console.log(response.status,response)
            Swal.fire(
                "Error",
                "No se guardó el registro",
                "error"
            )
        }
    }

    return (
        <Container>
            <NavBar/>
            <h1 className="text-center">Nuevo Cliente</h1>
            <Container className="col-md-5 mx-auto">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    required
                    value={data.nombre}
                    onChange={handleChange}
                    >
                    </Form.Control >
                </Form.Group >
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    required
                    value={data.apellido}
                    onChange={handleChange}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    name="telefono"
                    placeholder="Telefono"
                    required
                    value={data.telefono}
                    onChange={handleChange}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="number"
                    name="puntos"
                    placeholder="Puntos"
                    required
                    value={data.puntos}
                    onChange={handleChange}
                    >
                    </Form.Control>
                </Form.Group>
                <button className="btn btn-success">Guardar</button>
            </Form>
            
        </Container>
        </Container>
    )

}
export default NewCliente