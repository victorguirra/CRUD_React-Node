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

                    View Clients

                </Link>

                <Link 
                    to="/register" 
                    className="buttonLink" 
                    id="register"
                >

                    Add New Clients

                </Link>

            </ButtonsContainer>

        </Container>
    )
}

export default Welcome;