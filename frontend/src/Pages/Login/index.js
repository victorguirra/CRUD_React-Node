import React from 'react';

import LoginImg from '../../Images/Login.svg'

import { Wrapper, FirstContainer, SecondContainer } from './styles';

function Login(){
    return(
        <Wrapper>

            <FirstContainer>

                <h2>It´s Good To Have You Back</h2>

                <img src={LoginImg} alt="It´s Good To Have You Back" />

            </FirstContainer>

            <SecondContainer>

                <h2>Login Now</h2>

                <form>

                    <div className="formGroup">

                        <label htmlFor="name">Name:</label>
                        <input type="text" placeholder="Name" id="name" />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="nickname">Nickname:</label>
                        <input type="text" placeholder="Nickname" id="nickname" />

                    </div>

                    <button type="submit">Enter</button>   

                </form>

            </SecondContainer>

        </Wrapper>
    )
}

export default Login;