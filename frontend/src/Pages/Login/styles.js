import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (min-width: 1200px){
        flex-direction:row;
    }
`;

export const FirstContainer = styled.div`
    background-color:#8356E5;
    padding:10px 0;
    width:100vw;
    height:50vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (min-width: 1200px){
        height:100vh;
    }

    h2{
        color:#fff;
    }

    img{
        width:50%;
        margin-top:50px;

        @media (min-width:700px) and (max-width: 1200px){
            width:35%;
        }
    }
`;

export const SecondContainer = styled.div`
    width:100vw;
    height:50vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    h2{
        color:#8356E5; 
    }

    form{
        width:70%;
        padding:10px 0;
    }

    .formGroup{
        display:flex;
        flex-direction:column;
        margin-top:10px;
    }

    input{
        width:100%;
        outline:0;
        border:0;
        border:2px solid #8356E5;
        border-radius:8px;
        height:50px;
        padding:0 10px;
        margin-top:7px;

        &:focus{
            border-color:#0da150;
            height:55px;
        }
    }

    label{
        color:#8356E5;
    }

    h4{
        margin-top:20px;
        color:#ff1403;
    }

    button{
        background-color:#04d362;
        color:#fff;
        width:100%;
        height:50px;
        margin-top:30px;
        font-size:20px;
        border-radius:8px;
        border:0;
        outline:0;
        cursor:pointer;
        transition:0.4s;

        &:hover{
            background-color:#0da150;
            height:60px;
        }
    }   
`;
