import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../Services/api';

import { Container, FormContainer } from './styles';

function Register({user_id}){
    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ nickname, setNickname ] = useState('');
    const [ imageURL, setImageURL ] = useState('');

    const [ userData, setUserData ] = useState('');

    const history = useHistory();

    const { _id } = useParams();

    useEffect(() => {
        async function FetchData(){
            api.get(`users/${_id}`)
            .then(response => response.data)
            .then(data => {
                setUserData(data);
            })
        }
        FetchData();
    }, [_id])

    function handleSubmitForm( event ){
        event.preventDefault();

        if(name !== ''){
            api.put(`users/${_id}`, {
                name,
            })
            alert('Successfully Updated Client')
            history.push('/clients')
        }
        if(surname !== ''){
            api.put(`users/${_id}`, {
                surname,
            })
            alert('Successfully Updated Client')
            history.push('/clients')
        }
        if(email !== ''){
            api.put(`users/${_id}`, {
                email,
            })
            alert('Successfully Updated Client')
            history.push('/clients')
        }
        if(address !== ''){
            api.put(`users/${_id}`, {
                address,
            })
            alert('Successfully Updated Client')
            history.push('/clients')
        }
        if(nickname !== ''){
            api.put(`users/${_id}`, {
                nickname,
            })
            alert('Successfully Updated Client')
            history.push('/clients')
        }
        if(imageURL !== ''){
            api.put(`users/${_id}`, {
                imageURL,
            })
            alert('Successfully Updated Client')
            history.push('/clients')
        }    
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
                            defaultValue={ userData.name }
                            required
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="surname">Surname:</label>
                        <input 
                            type="text" 
                            id="surname"
                            onChange={ text => setSurname(text.target.value) } 
                            defaultValue={ userData.surname }
                            required
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            onChange={ text => setEmail(text.target.value) }
                            defaultValue={ userData.email }
                            required
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="address">Address:</label>
                        <input 
                            type="text" 
                            id="address"
                            onChange={ text => setAddress(text.target.value) }
                            defaultValue={ userData.address }
                            required
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="nickname">NickName:</label>
                        <input 
                            type="text" 
                            id="nickname"
                            onChange={ text => setNickname(text.target.value) } 
                            defaultValue={ userData.nickname }
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
                            defaultValue={ userData.imageURL }
                        />

                    </div>

                    <button type="submit">Update Client</button>

                </form>

            </FormContainer>

        </Container>
    )
}

export default Register;