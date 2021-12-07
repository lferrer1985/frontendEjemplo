import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import Swal from 'sweetalert2'
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

const TableUsuarios = () => {
    
    // agregaremos un hook para traer nuestra data
    
    const baseURL = "http://localhost:8080/api/usuario/";

    const [data, setData] = useState([]);
    
    
        const peticionGet = async () => {
            await axios.get(baseURL).then(response=>{
              setData(response.data); //data aquí hace referencia a una funcion de axios
            }).catch(error=>{
              console.log(error);
            })
            console.log(data);
        };
        
        useEffect(() => {    
            peticionGet();// llamamos la funcion
        }, []);

        const peticionPost = async () =>{
          await axios.post(baseURL,clienteSeleccionado)
          .catch(error=>{
            console.log(error);
          })
          peticionGet();
          abrirCerrarModalEditar();
          
        }

        const peticionDelete=async()=>{
          await axios.delete(baseURL+clienteSeleccionado.id)
          .then(response =>{
            setData(data.filter(cliente=>cliente.id!==clienteSeleccionado.id));
            abrirCerrarModalEliminar();
            Swal.fire(
              "confirmado",
              response.data,
              "warning"
            )
          }).catch(error =>{
            console.log(error);
          })
        }

        const [modalEditar,setModalEditar]=useState(false);
        const [modalEliminar,setModalEliminar]=useState(false);

        const[clienteSeleccionado, setClienteSeleccionado] = useState({
          nombre:"",
          apellido:"",
        });

        const seleccionarCliente = (cliente,caso)=>{
          setClienteSeleccionado(cliente);
          (caso === "Editar")?abrirCerrarModalEditar():abrirCerrarModalEliminar();
        }

        const abrirCerrarModalEditar=()=>{
          setModalEditar(!modalEditar);
        }
    
        const abrirCerrarModalEliminar=()=>{
          setModalEliminar(!modalEliminar);
        }

        const handleChange=e=>{
          const{name,value}=e.target;//segun el nombre y el valor de los target o etiqueta
          setClienteSeleccionado((prevState)=>({
            ...prevState,
            [name]:value
          }));
        }

        const [datosBusqueda, setDatosBusqueda] =useState({
          caja:"",
          filtro:"2"
        });
    
        const handleInputChange=(event)=>{
          setDatosBusqueda({
            ...datosBusqueda,
            [event.target.name]:event.target.value
          })
        }

        const buscarCliente= async () =>{
          switch(datosBusqueda.filtro){
            case "1":
              await axios.get(baseURL+datosBusqueda.caja)
              .then(response=>{
                if(response.data !== null){
                  setData([response.data]);
                }
                else{
                  Swal.fire(
                    "No hay resultado!",
                    "",
                    "info")};
              }).catch(error =>{
                console.log(error);
              });
              break;
    
              case "2":
                await axios.get(baseURL+"nombre/"+datosBusqueda.caja.toLowerCase())
                .then(response=>{
                  if(response.data.length !==0){
                    setData(response.data);
                  }else{
                    Swal.fire(
                      "No hay Resultado!",
                      "",
                      "info")};
                    }).catch(error=>{
                      console.log(error);
                    });
                    break;
    
              case "3":
                console.log(baseURL+"apellido/"+datosBusqueda.caja)
                await axios.get(baseURL+"apellido/"+datosBusqueda.caja)
                .then(response=>{
                  if(response.data.length !==0){
                    setData(response.data);
                  }else{
                    Swal.fire(
                      "No hay Resultado!",
                      "",
                      "info")};
                    }).catch(error=>{
                      console.log(error);
                    });
                    break;
    
              default:
                console.log("default");
    
    
          }
        }

    return (
        <div>
          <ReactBootStrap.Form>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Form.Control name="caja" onChange={handleInputChange} placeholder="Ingresa Busqueda"/>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Form.Select name="filtro" onChange={handleInputChange}>
                            
                            <option value="2">Nombre</option>
                            <option value="3">Apellido</option>
                        </ReactBootStrap.Form.Select>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Button onClick={()=>buscarCliente()}>Buscar</ReactBootStrap.Button>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col className="my-1 d-md-flex justify-content-md-end">
                        <ReactBootStrap.Button className="btn-success" href="/newcliente">Nuevo Cliente</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Form>

        <table className="table table-hover">
          <thead>
            <tr>

              <th scope="col">Documento</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Celular</th>
              <th scope="col">Email</th>
              
              <th scope="col">Acciones</th>
              

            </tr>
          </thead>
          <tbody>
            {
              data.map((item) =>
                <tr key={item.id}>
                  <td>{item.numerodocumento}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.celular}</td>
                  <td>{item.email}</td>
                  
                  <td><button className="btn btn-primary" onClick={()=>seleccionarCliente(item,"Editar")} >Editar</button>
                    {"  "}<button className="btn btn-danger" onClick={()=>seleccionarCliente(item)}>Eliminar</button>
                  </td>                  
                </tr>
              )
            }
          </tbody>
        </table>

        <Modal show={modalEditar}>
        <ModalTitle>
                <h2>Editar Cliente</h2>
              </ModalTitle>
              <ModalBody>
                <div className="form-group">
                  <label>Id</label>
                  <input className="form-control"
                  readOnly
                  type="text"
                  value={clienteSeleccionado.id}
                  />
                  <br/>
                  <label>Numero Documento</label>
                  <input className="form-control"
                  type="text"
                  name="numerodocumento"
                  value={clienteSeleccionado.numerodocumento}
                  onChange={handleChange}
                  />
                  <br/>
                  <label>Nombre</label>
                  <input className="form-control"
                  type="text"
                  name="nombre"
                  value={clienteSeleccionado.nombre}
                  onChange={handleChange}
                  />
                  <br/>
                  <label>Apellido</label>
                  <input className="form-control"
                  type="text"
                  name="apellido"
                  value={clienteSeleccionado.apellido}
                  onChange={handleChange}
                  />
                  <br/>
                  <label>Celular</label>
                  <input className="form-control"
                  type="text"
                  name="celular"
                  value={clienteSeleccionado.celular}
                  onChange={handleChange}
                  />
                  <br/>
                  <label>Correo</label>
                  <input className="form-control"
                  type="text"
                  name="email"
                  value={clienteSeleccionado.email}
                  onChange={handleChange}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" onClick={()=>peticionPost()}>Actualizar</button>
                <button className="btn btn-danger" onClick={()=>abrirCerrarModalEditar()}>Cancelar</button>
              </ModalFooter>
        </Modal>
        <Modal show={modalEliminar}>
              <ModalBody>
                ¿Esta seguro que desea eliminar al cliente {clienteSeleccionado.nombre}?
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-danger" onClick={()=>peticionDelete()}>Si</button>
                <button className="btn btn-secundary" onClick={()=>abrirCerrarModalEliminar()}>No</button>
              </ModalFooter>

        </Modal>
        </div>
    )
}
export default TableUsuarios