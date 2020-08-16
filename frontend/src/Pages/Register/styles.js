import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const FormContainer = styled.div`
    width:40%;

    h1{
        color:#00ff74;
        margin-top:10px;
    }

    form{
        width:100%;
        margin-top:20px;
    }

    .formGroup{
        display:flex;
        flex-direction:column;
        margin-top:10px;
    }

    input{
        background:transparent;
        color:#fff;
        height:45px;
        border:3px solid #fff;
        border-radius:10px;
        outline:0;
        padding:0 15px;
        margin-top:7px;
        font-size:18px;

        &:focus{
            border:3px solid #00ff74;
        }
    }

    label{
        color:#fff;
    }

    button{
        background-color:#04d362;
        color:#fff;
        border:0;
        outline:0;
        width:100%;
        height:50px;
        margin-top:25px;
        margin-bottom:50px;
        border-radius:7px;
        font-size:18px;
        cursor:pointer;
        transition:0.5s;

        &:hover{
            background-color:#0da150;
            height:55px;
        }
    }
`;