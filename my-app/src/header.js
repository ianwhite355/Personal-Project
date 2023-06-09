import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import LinkedIn from "./images/linkedIn.png";


export const Header = () => {

    const location = useLocation()


    return (
        <Heading>

                <Headertext>Ian White</Headertext>
                
                <MiddleHeader>
                    <AboutLink to="/">Home</AboutLink>
                    <HomeLink to="/projects">My projects</HomeLink>
                </MiddleHeader>

                <div>
                    <Link to="https://www.linkedin.com/in/ian-white-1b652622b/" target="blank">
                        <HeaderLogo src={LinkedIn}/>
                    </Link>
                </div>


        </Heading>
        
    )
}

const Heading = styled.div`
    position:relative;
    top:0%;
    color:white;
    font-size: 1em;
    background-color: rgba(73, 77, 95, 0.8);
    display: flex;
    justify-content: space-between;
    height: 75px;

    @media (min-width:200px) and (max-width:900) {
        
    }
`


const MiddleHeader = styled.div`
    display:flex;
    transform: translate(-12.5%);
    &:hover {
        cursor: pointer;
    }

    & + div {
        cursor: pointer;
    }
`

const HomeLink = styled(Link)`
    padding: 20px;
    text-decoration: none;
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    position: relative;

    &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 20px;
    left: 0;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    }

    &:hover::before {
    transform: scaleX(1);
    }


`;

const AboutLink = styled(Link)`
    padding: 20px;
    text-decoration: none;
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    position: relative;

    &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 20px;
    left: 0;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    }

    &:hover::before {
    transform: scaleX(1);
    }
`;


const Headertext = styled.h1`
    position: relative;
    bottom: 5px;
    padding-left: 25px;
    color: white;
`

const HeaderLogo = styled.img`
    padding-right: 25px;
    position:relative;
    top: 10px;
    width:60px;
    height:auto;
`

export default Header