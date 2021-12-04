import axios from "axios";
import Swal from "sweetalert2";
import React, {useState} from "react";
import { useHistory } from 'react-router'
import {Container,  Form} from "react-bootstrap";
import NavBar from "../components/NavBar";

const NewAcademia = () => {
    
    const history = useHistory();
    
    const [data , setData] = useState({nivel:"",titulo:"",anio:"",estado:""})

    

    const handleChange =  ({target}) => {
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    const URL="localhost:8080/user/update/academia/{id}/{nivel}/{titulo}/{anio}/{estado}";
    
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
            history.push("usuario")
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
            <h1 className="text-center">Registrar Academia</h1>
            <Container className="col-md-5 mx-auto">
            <Form onSubmit={handleSubmit}>
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
                <button className="btn btn-success">Guardar</button>
            </Form>
            
        </Container>
        </Container>
    )

}
export default NewAcademia