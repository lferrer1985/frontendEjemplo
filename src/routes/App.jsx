
import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from "../containers/Layout";

import Usuarios from '../pages/Usuarios';
import Acercade from '../pages/Acercade';
import Inicio from "../pages/Inicio";
import NotFound from '../pages/NotFound';
import NewUsuario from "../pages/NewUsuario.jsx";
import NewAcademia from "../pages/NewAcademia.jsx";
import Login from "../pages/Login";

function App() {
  return (   
    <Router>
      <Layout> 
                      
          <Switch>
            <Route exact path="/about" component={Acercade} />                         
            <Route exact path="/users" component={Usuarios} />            
            <Route exact path="/newusuario" component={NewUsuario} />
            <Route exact path="/newacademia" component={NewAcademia} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Inicio} />
            <Route path="*" component={NotFound} />
          </Switch>
      
      </Layout>
    </Router>

  );
}

export default App;
