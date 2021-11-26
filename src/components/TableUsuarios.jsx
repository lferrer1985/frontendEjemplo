import React, { useEffect, useState } from "react";
import axios from "axios";

const TableUsuarios = () => {
    
    // agregaremos un hook para traer nuestra data
    const [users, setUsers] = useState({documentos:[]})
    useEffect(() => {
        const fecthUsersList = async () => {
            const {data} = await axios(
                //"https://jsonplaceholder.typicode.com/users"
                "http://localhost:8080/api/cliente"
            );
            setUsers({documentos:data});//asignamos los datos al json documentos
            console.log(data);
        };
        fecthUsersList();// llamamos la funcion
    }, [setUsers]);

    return (
        <div>
        <table className="table table-hover">
          <thead>
            <tr>

              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Acciones</th>
              

            </tr>
          </thead>
          <tbody>
            {users.documentos &&
              users.documentos.map((item) =>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.address.ciudad}</td>
                  <td><button className="btn btn-primary">Editar</button>{"  "}<button className="btn btn-danger">Eliminar</button></td>
                  
                </tr>
              )
            }
          </tbody>
        </table>
        
        </div>
    )
}
export default TableUsuarios