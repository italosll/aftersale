import styled from 'styled-components';
import Logo from '../../Images/aftersale.png'

interface CustomProps {
    alight?: boolean;
    allLights?:boolean;
    nightfall?:boolean;
}

let window_light_on = '#F6FF86';
let window_light_off = '#B6B6B6';
let transparent = '#00000000';
let night = '#484C70';
let day = '#B9F2FF';
let asphalt = '#686B6F';
let cement_1 = '#CFCFCF';
let cement_2 = '#B9B9B9';
let door_1 = '#8F8F8F';
let door_2 = '#B5B5B5';
let white = '#FFF'

export const Window =styled.div<CustomProps>`
    width:80%;
    height:calc(100%/7);
    border-radius:3px;
    background:${props => props.alight ? window_light_on : window_light_off};
    box-shadow: 0px 0px 10px ${props => props.alight ? window_light_on : transparent};

    @media(min-width: 1024px) {
        width:75%;
    }
`;

export const Container = styled.div<CustomProps>`
    width:100vw;
    height: 100vh;
    background:${props => props.nightfall ? night : day};
`;

export const Street = styled.div`
    width:100vw;
    height: 20vh;
    background:${asphalt};
    bottom:0;
`;

export const Company =styled.div`
    width:40vw;
    height:70vh;
    margin-top:-90vh;
    margin-left:auto;
    margin-right:auto;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    background:linear-gradient(${cement_1},${cement_2});
    display:flex;
    flex-direction:column;

    @media(min-width: 1024px) {
        width:15vw;
    }
`;

export const Banner =styled.div`
    width: 100%;
    height: 4vh;
    background-image:url(${Logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 5vw solid ${transparent};

    @media(min-width: 1024px) {
        height: 5vh;
        border: 1vw solid ${transparent};
       
    }
`;

export const Row = styled.div`
    width:auto;
    height:auto;
    display:flex;
    flex-direction:row;
`;

export const Column =styled.div`
    width:20vw;
    height:40vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`;

export const Door = styled.div`
    width:30%;
    height:7vh;
    margin-top:auto;
    margin-left:auto;
    margin-right:auto;
    background:linear-gradient(${door_1},${door_2});;
`;

export const Outdoor = styled.button<CustomProps>`
    width:60vw;
    height:50px;
    margin-top:52vh;
    margin-left:-10vw;
    position:absolute;
    outline:none;
    background: ${props => props.allLights == false ? window_light_on : night};
    border: 5px solid ${cement_1};
    border-radius:5px;
    font-size:1rem;
    font-family:Sen;
    font-weight:700;
    color:${props => props.allLights == false ? asphalt : white};

    @media(min-width: 1024px) {
        width:25vw;
        margin-left:-5vw;
    }

`;

export const Support = styled.div`
    width:3vw;
    height:18vh;
    margin-top:52vh;
    margin-left:-8vw;
    position:absolute;
    background:${cement_1};

    @media(min-width: 1024px) {
        width:1vw;
        margin-left:-4vw;
    }
`;


