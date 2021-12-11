import axios from "axios";
import Swal from "sweetalert2";
import React, {useState} from "react";
import { useHistory } from 'react-router'
import {Container,  Form} from "react-bootstrap";
import NavBar from "../components/NavBar";

const NewCliente = () => {
    
    const history = useHistory();
    
    const [data , setData] = useState({numerodocumento:"",nombre:"",apellido:"",email:"",clave:""})

    

    const handleChange =  ({target}) => {
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    const URL="http://localhost:8080/api/usuario";
    
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
            history.push("newcliente")
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
            <h3 className="text-center">Registro de nuevo usuario</h3>
            <Container className="col-md-5 mx-auto">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="number"
                    name="numerodocumento"
                    placeholder="Numero de documento"
                    required
                    value={data.numerodocumento}
                    onChange={handleChange}
                    >
                    </Form.Control >
                </Form.Group >
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
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    value={data.email}
                    onChange={handleChange}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    name="clave"
                    placeholder="Contraseña"
                    required
                    value={data.clave}
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