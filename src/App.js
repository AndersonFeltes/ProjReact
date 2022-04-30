import React, {useState} from 'react';
import Header from './componentes/header/index.js';
import Footer from './componentes/footer/index.js';
import ControllerLogin from './pages/controllerLogin';
import MainRoutes from './MainRoutes.js';
import { BrowserRouter as Router} from 'react-router-dom'; //importação para o controle de rotas
import './App.css';

function App(){

  /*variavel que ira fazer o controle de usuarios
  (Primeiro parametro é o nem da variavel, segundo parametro nome da função que será chamada)
  */
  const [user, setUser] = useState(null);

  if(user === null){
    return(
      <ControllerLogin/>
    )
  }
  
  
  return(
    <Router>
      <Header/>

      <MainRoutes/>

      <Footer/>
    </Router>
  )
}

export default App;
