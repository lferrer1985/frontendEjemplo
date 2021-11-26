import axios from "axios";
import Swal from "sweetalert2";
import React, {useState} from "react";
import {Form} from "react-bootstrap";

import NavBar from "../components/NavBar";
import TableUsuarios from "../components/TableUsuarios";
const NewCliente = () => {
    //const history = useHistory();
    const [data , setData] = useState({id:"",nombre:"",apellido:""})
    const handleChange = ({target})=>{//captura los eventos de cambios de datos en los target de los controles input
        setData({
            ...data,
        [target.name]:target.value
        })        
    }

    const URL="http://localhost:8080/api/cliente";
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL, data)
        
        console.log(response,response.data);

        if(response.status === 2000){
            Swal.fire(
                "Guardado!",
                `El Registro ${response.data.id} ha sido guardado con exito!`,
                "success"
            )
            //history.push("\cliente")
        }else{
            console.log(response.status,response)
            Swal.fire(
                "Error",
                "No se guardó el registros",
                "error"
            )
        }
    }

    return (
        <div className="container">
            <NavBar/>
            <Form onSubmit={handleSubmit}>
                <Form.Control type="text" name="id" placeholder="Id"
                                value={data.id}
                                required
                                onChange={handleChange}>
                </Form.Control>

                <Form.Control type="text" name="nombre" placeholder="Nombre"
                                value={data.nombre}
                                required
                                onChange={handleChange}>
                </Form.Control>

                <Form.Control type="text" name="apellido" placeholder="Apellido"
                                value={data.apellido}
                                required
                                onChange={handleChange}>
                </Form.Control>
            </Form>
            <button>Guardar</button>
            <TableUsuarios/>
        </div>
    )

}
export default NewCliente