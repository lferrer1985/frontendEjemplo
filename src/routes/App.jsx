
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
import NewCliente from "../pages/NewCliente";

function App() {
  return (   
    <Router>
      <Layout> 
                      
          <Switch>
            <Route exact path="/about" component={Acercade} />                         
            <Route exact path="/users" component={Usuarios} />
            <Route exact path="/" component={Inicio} />
            <Route exact path="/newcliente" component={NewCliente} />
            <Route path="*" component={NotFound} />
          </Switch>
      
      </Layout>
    </Router>

  );
}

export default App;
