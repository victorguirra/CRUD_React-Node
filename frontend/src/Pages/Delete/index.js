import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import api from '../../Services/api';

import DeleteImage from '../../Images/Delete.svg';

import { Container } from './styles';

function Delete(){
    const history = useHistory();

    const { _id } = useParams();

    function handleDeleteUser(){
        api.delete(`users/${_id}`)
        .then(() => {
            alert('User Deleted Successfully!')
            history.push('/clients')
        }).catch((error) => {
            alert(`Error Deleting The User: ${error}`)
        })
    }

    return(
        <Container>

            <h2>Do You Really Want To Delete The User?</h2>

            <img src={DeleteImage} alt="Delete User" />

            <div className="buttonsContainer">

                <button onClick={ handleDeleteUser } id="yesButton"className="button">Yes</button>

                <Link to="/clients" id="noButton" className="button">No</Link>

            </div>

        </Container>
    )
}

export default Delete;