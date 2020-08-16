import React from 'react';
import { Link } from 'react-router-dom';

import WelcomeImg from '../../Images/Welcome.svg';

import { Container, ButtonsContainer } from './styles';

function Welcome(){
    return(
        <Container>

            <img src={WelcomeImg} alt="Seja Bem-Vindo(a)" />

            <ButtonsContainer>

                <Link 
                    to="/clients" 
                    className="buttonLink" 
                    id="clients"
                >

                    Verificar Clientes

                </Link>

                <Link 
                    to="/register" 
                    className="buttonLink" 
                    id="register"
                >

                    Adicionar Novo Cliente

                </Link>

            </ButtonsContainer>

        </Container>
    )
}

export default Welcome;