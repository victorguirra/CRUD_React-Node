import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../Services/api';

import { Container, FormContainer } from './styles';

function Register(){
    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ nickname, setNickname ] = useState('');
    const [ imageURL, setImageURL ] = useState('');

    const history = useHistory();

    function handleSubmitForm( event ){
        event.preventDefault();
        
        api.post('users', {
            name,
            surname,    
            email,
            address,
            nickname,
            imageURL,
        }).then(() => {
            alert('Client Successfully Registered');

            history.push("/clients");
        }).catch(error => {
            alert('Error When Registering The Client');

            history.push("/");
        }) 
    }

    return(
        <Container>

            <FormContainer>

                <h1>Add New User</h1>

                <form onSubmit={ handleSubmitForm }>

                    <div className="formGroup">

                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name"
                            onChange={ text => setName(text.target.value) } 
                            required
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="surname">Surname:</label>
                        <input 
                            type="text" 
                            id="surname"
                            onChange={ text => setSurname(text.target.value) } 
                            required
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            onChange={ text => setEmail(text.target.value) }
                            required
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="address">Address:</label>
                        <input 
                            type="text" 
                            id="address"
                            onChange={ text => setAddress(text.target.value) }
                            required
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="nickname">NickName:</label>
                        <input 
                            type="text" 
                            id="nickname"
                            onChange={ text => setNickname(text.target.value) } 
                            required
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="imageURL">URL Image:</label>
                        <input 
                            type="text" 
                            id="imageURL"
                            onChange={ text => setImageURL(text.target.value) } 
                            required
                        />


                    </div>

                    <button type="submit">Add Client</button>

                </form>

            </FormContainer>

        </Container>
    )
}

export default Register;