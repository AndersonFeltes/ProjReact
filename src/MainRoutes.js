
//criando arquivo para o controle das rotas
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Page from './pages/Home/index.js';
import Config from './pages/config/config.js';

function MainRoutes(){
    return(
        <Routes>
            <Route  path="/page" element={<Page/>}/>

            <Route  path="/config" element={<Config/>}/>

        </Routes>
    )
}
export default MainRoutes;