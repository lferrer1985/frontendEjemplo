import axios from "axios";
import Swal from "sweetalert2";
import React, {useState} from "react";
import { useHistory } from 'react-router'
import {Container,  Form} from "react-bootstrap";
import NavBar from "../components/NavBar";

const Login = () => {
    
    const history = useHistory();
    
    const [data , setData] = useState({email:"",clave:""})

    

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
            <h3 className="text-center">Login</h3>
            <Container className="col-md-5 mx-auto">
            <Form onSubmit={handleSubmit}>                              
                
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

                <button className="btn btn-success">Ingresar</button>
            </Form>
            
        </Container>
        </Container>
    )

}
export default Login