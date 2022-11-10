import React, {useContext} from "react";
import Button from "../Button";
import {Container, Nav} from './style'


export const Header = (e) => {

    const {switchTheme} = useContext(ThemeContext)
   
    return (
        <Container>
            <Nav>
                <h1>Home</h1>
                 <Button>Meu Botão</Button>
                 <Button onClick={switchTheme}>Dark Mode</Button>
            </Nav>
        </Container>
    )
};