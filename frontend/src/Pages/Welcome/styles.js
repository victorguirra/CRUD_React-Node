import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    img{
        width:60%;

        @media (min-width:700px){
            width:45%;
        }

        @media(min-width:1024px){
            width:30%;
        }
    }
`;

export const ButtonsContainer = styled.div`
    width:60%;
    margin-top:60px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    @media (min-width:1024px){
        flex-direction:row;
        justify-content:space-around;
    }

    .buttonLink{
        width:100%;
        height:54px;
        display:flex;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        margin-top:30px;
        border-radius:10px;
        color:#fff;
        font-size:18px;
        cursor: pointer;
        transition:0.4s;

        @media (min-width:1024px){
        width:45%;
        height:90px;
    }

    }

    #clients{
        background-color:#24134a;

        &:hover{
            background-color:#40345e;
        }
    }

    #register{
        background-color:#04d362;

        &:hover{
            background-color:#0da150;
        }
    }



`;