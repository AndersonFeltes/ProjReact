import React from 'react';
import { Link } from 'react-router-dom'
import { AreaLogin } from './style'
import { BtnDefaultIcons } from '../../componentes/Style'
import { BtnDefault } from '../../componentes/Style'
import { AiFillFacebook } from 'react-icons/ai'
import { SiGoogletranslate } from 'react-icons/si'


function Login(){
    return(
                    <AreaLogin>
                        <h1>Faça login em sua conta</h1>

                        <BtnDefaultIcons>
                            <AiFillFacebook/>
                            <div class="center">Fazer login com o Facebook</div>
                        </BtnDefaultIcons>

                        <BtnDefaultIcons>
                            <SiGoogletranslate/>
                            <div class="center"> Fazer login com o Google</div>
                        </BtnDefaultIcons>

                        <p>OU</p>

                        <form>
                            <div class="form-input">
                                <label>E-mail: </label>
                                <input type="email" />
                            </div>

                            <div class="form-input">
                                <label>Senha: </label>
                                <input type="password"/>
                            </div>

                            <BtnDefault><Link to="/page">Entrar</Link></BtnDefault>

                            <div class="footerLogin">
                                Não tem uma conta? 
                                <Link to="/registrar" >Registre-se</Link>
                            </div>
                        </form>
                        
                    </AreaLogin>
    )
}
export default Login;