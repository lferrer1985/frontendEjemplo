import React from "react";
import NavBar from "../components/NavBar";
import {Container} from "react-bootstrap"


const Inicio = () =>{
    return (
      <Container className="container">
       
        <NavBar className="row" />
        <br />
        <h2 className="text-center">Alcances del Banco de Hojas de Vida</h2>
        <br />
        <p className="text-center">
          En el marco de contratación de personal académico se hace la
          presentación para suplir de docentes hora cátedra a la Universidad.
        </p>
        <br />

        <ul class="list-group">
          <li class="list-group-item">
            Docentes hora catedra que no hayan registrado o actualizado su hoja
            de vida en el Banco de Hojas de Vida.
          </li>
          <li class="list-group-item">
            Docentes inscritos y admitidos en el Banco de Hojas de Vida que
            consideren necesario actualizar las áreas curriculares a las cuales
            aspira, formación académica, experiencia profesional y/o docente.
          </li>
          <li class="list-group-item">
            {" "}
            Personas interesadas en integrar el Banco de Hojas de Vida de
            Docentes no pertenecientes a la entidad educativa.
          </li>
        </ul>
      </Container>
    );
}
export default Inicio