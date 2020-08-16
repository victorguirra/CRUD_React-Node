import styled from 'styled-components';

export const Container = styled.div`
    background-color:#8356E5;
    display:flex;
    flex-direction:column;
    align-items:center;

    h2{
        color:#fff;
        margin-top:30px;
    }
`;

export const ClientsContainer = styled.div`
    width:40%;

    @media (max-width:700px){
        width:90%;
    }
    @media (min-width:701px) and (max-width:1024px){
        width:75%;
    }
    @media (min-width:1025px) and (max-width:1220px){
        width:50%;
    }
`;

export const Option = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#fff;
    margin-top:30px;
    margin-bottom:20px;
    border-radius:10px;
    box-shadow:1px 1px 1px #000;
    padding:20px;

    .headerOption{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;

        img{
            width:120px;
            height:120px;
            border-radius:60px;
        }
    }

    .namesOption{
        width:60%;
        display:flex;
        flex-direction:column;
        
    }

    .footerOptions{
        margin-top:15px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;

        .linkButton{
            color:#fff;
            width:45%;
            height:40px;
            border-radius:8px;
            display:flex;
            align-items:center;
            justify-content:center;
            text-decoration:none;
            transition:0.4s;
        }

        #updateButton{
            background-color:#04d362;
            
            &:hover{
                background-color:#0da150;
                font-size:16px;
            }
        }

        #deleteButton{
            background-color:#ff1943;
            border:none;
            font-size:16px;
            outline:0;
            

            &:hover{
                background-color:#d92e4c;
            }
        }

    }

`;



