import React from "react";
import NavBar from "../components/NavBar";
const Acercade = () => {
    return (
      <div className="container">
        <NavBar />
        <br />
        <h2 className="text-center">
          Participantes en la construcción del proyecto
        </h2>
        <br />
        <p className="text-center">
          A continuación se presentan los nombres de los integrantes que
          particitparon en la realización del proyecto final.
        </p>
        <br />

        <ul class="list-group">
          <li class="list-group-item">Luis Miguel Ferrer</li>
          <li class="list-group-item">Germán Castañeda</li>
          <li class="list-group-item">Edison Mauricio Hernandez Vanegas</li>
          <li class="list-group-item">Julian Andrés Guecha</li>
          <li class="list-group-item">Julian Pérez</li>
        </ul>
      </div>
    );
}
export default Acercade