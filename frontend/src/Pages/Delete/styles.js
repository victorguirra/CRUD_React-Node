import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    h2{
        color:#fff;
    }

    img{
        width:50%;
        margin-top:40px;

        @media(max-width:1024px){
            width:80%;
        }
    }

    .buttonsContainer{
        width:50%;
        margin-top:40px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;

        @media(max-width:1024px){
            flex-direction:column;
            width:80%;
        }
    }

    .button{
        color:#fff;
        font-size:18px;
        width:45%;
        height:50px;
        display:flex;
        align-items:center;
        justify-content:center;
        border:0;
        outline:0;
        border-radius:10px;
        text-decoration:none;
        cursor:pointer;
        transition:0.4s;

        @media(max-width:1024px){
            width:90%;
            margin-top:30px;
        }
    }

    #yesButton{
        background-color:#04d362;
            
        &:hover{
            background-color:#0da150;
        }
    }

    #noButton{
        background-color:#ff1943;

        &:hover{
            background-color:#d92e4c;
        }
    }
`;