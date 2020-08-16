import React from 'react';

import { Container, FormContainer } from './styles';

function Register(){
    return(
        <Container>

            <FormContainer>

                <h1>Add New User</h1>

                <form>

                    <div className="formGroup">

                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                        />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="surname">Surname:</label>
                        <input type="text" id="surname" />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" security={true}/>

                    </div>

                    <div className="formGroup">

                        <label htmlFor="nickname">NickName:</label>
                        <input type="text" id="nickname" />

                    </div>

                    <div className="formGroup">

                        <label htmlFor="imageURL">URL Image:</label>
                        <input type="text" id="imageURL" />

                    </div>

                    <button type="submit">Add Client</button>

                </form>

            </FormContainer>

        </Container>
    )
}

export default Register;