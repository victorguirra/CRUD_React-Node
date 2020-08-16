import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../Services/api';

import { Container, ClientsContainer, Option } from './styles';

function Clients(){
    const [ usersData, setUsersData ] = useState([]);

    useEffect(() => {
        async function FetchData(){
            api.get('users')
            .then(response => response.data)
            .then(data => {
                setUsersData(data.docs);
            })
        }
        FetchData();
    }, [])

    return(
        <Container>

            <h2>Your Clients</h2>

            <ClientsContainer>

                {usersData.map( user => (
                    <Option key={ user._id }>

                        <div className="headerOption">

                            <img src={ user.imageURL } alt={ user.name } />

                            <div className="namesOption">

                                <h3>{ user.nickname }</h3>

                                <p>{ user.name }</p>

                                <p>{ user.email }</p>

                                <p>{ user.address }</p>

                            </div>

                        </div>

                        <div className="footerOptions">

                            <Link to={`/update/${user._id}`} id="updateButton" className="linkButton">Update</Link>

                            <Link to={`/delete/${user._id}`} id="deleteButton" className="linkButton">Delete</Link>

                        </div>

                    </Option>
                ))}

            </ClientsContainer>

        </Container>
    )
}

export default Clients;