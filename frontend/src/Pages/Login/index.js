import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import api from '../../Services/api';

import LoginImg from '../../Images/Login.svg'

import { Wrapper, FirstContainer, SecondContainer } from './styles';

function Login(){
    const [ name, setName ] = useState('');
    const [ nickname, setNickname ] = useState('');

    const [ errorMessage, setErrorMessage ] = useState('');

    const history = useHistory();

    function submitForm(event){
        event.preventDefault();

        if( name === '' || nickname === '' ){
            setErrorMessage('Please Fill All Fileds!');
        }else{
            api.get('users')
            .then(response => response.data)
            .then (data => data.docs)
            .then (docs => {
                docs.map( user => {
                    if(user.name === name && user.nickname === nickname){
                        history.push(`/home/${user._id}`);
                    }else(
                        setErrorMessage('Please Enter a Valid User')
                    )
                })
            })
        }

    }

    return(
        <Wrapper>

            <FirstContainer>

                <h2>It´s Good To Have You Back</h2>

                <img src={LoginImg} alt="It´s Good To Have You Back" />

            </FirstContainer>

            <SecondContainer>

                <h2>Login Now</h2>

                <form onSubmit={submitForm}>

                    <div className="formGroup">

                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            id="name"
                            onChange={text => setName(text.target.value) } 
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="nickname">Nickname:</label>
                        <input 
                            type="text" 
                            placeholder="Nickname" 
                            id="nickname"
                            onChange={ text => setNickname(text.target.value) } 
                        />

                    </div>

                    <h4>{errorMessage}</h4>

                    <button type="submit">Enter</button>   

                </form>

            </SecondContainer>

        </Wrapper>
    )
}

export default Login;