import React from 'react'
import { AreaLogin } from '../Login/style'
//import { BtnDefaultIcons } from '../../../componentes/Style'
import { BtnDefault } from '../../componentes/Style'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

function Registrar(){
    return(
        <AreaLogin>
            <h1 class="organize">
                <Link to="/"><IoIosArrowBack/></Link>
                Crie sua conta</h1>
            <p>Crie sua conta, é de graça!</p>
            <form>
                <div class="form-input">
                     <label>Nome: </label>
                    <input type="text" />
                </div>

                <div class="form-input">
                     <label>E-mail: </label>
                    <input type="email" />
                </div>

                <div class="form-input">
                    <label>Senha: </label>
                    <input type="password"/>
                </div>

                <BtnDefault>Registrar</BtnDefault>

                <div class="footerLogin">
                    Já tem uma conta? 
                    <Link to="/" >Faça Login!</Link>
                   </div>
            </form>
        </AreaLogin>
    )
}
export default Registrar;