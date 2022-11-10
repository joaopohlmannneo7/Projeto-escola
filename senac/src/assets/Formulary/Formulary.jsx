import React, {useContext, useState} from "react";
import { ContainerCardF } from "./style";
import { Button } from "./Button";
import { Container, Nav } from "../Header/style";
import { Link } from "./style";
import senac_logo_branco from '../image/senac_logo_branco.png'






export const Headbar2 = () =>{
    
    return (
        <Container>
            <Nav>
                <img src={senac_logo_branco}/>
                 <Button><Link to="*">Login</Link></Button>
                 <Button>Dark Mode</Button>
            </Nav>
        </Container>
    )
}

export const Signin = () =>{

    
    return (
       
        <ContainerCardF>
        <div id="login">
        <section className="container"/>
    <h2 id="titulo-form">Cadastrar</h2>
    <form id="form-adiciona">
        <div className="grupo">
            <label>Nome</label>
            <input id="nome" name="nome" type="text" placeholder="Digite o seu nome " className="campo"/>
        </div>
        <div className="grupo">
            <label>E-mail</label>
            <input id="email" name="email" type="text" placeholder="Digite o seu  email " className="campo campo-medio"/>
        </div>
        <div className="grupo">
            <label >Senha</label>
            <input id="senha" name="senha" type="text" placeholder="Digite a  seu senha " className="campo campo-medio"/>
        </div>
        <div className="grupo">
            <label>Confirmar Senha</label>
            <input id="confimar senha" type="text" placeholder="Confirme a  senha " className="campo campo-medio"/>
        </div>

        <Button id="adicionar" className="botao bto-principal">Acessar</Button>
    </form>
    </div>
   
      
        </ContainerCardF>
       
);

};
export default Signin & Headbar2;