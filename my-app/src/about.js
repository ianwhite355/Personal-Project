import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgroundImage from "./images/backgroundimg.webp";
import { frontEndData } from './datalang';
import { backEndData } from './datalang';
import { otherSkills } from './datalang';

const About = () => {
    return (
        <Container>
            <Languages>Skills</Languages>
            <Skills>
                <FrontEnd>
                    {frontEndData.map((user) => (
                            <FrontEndName key={user.id} image={user.image}> {user.name}</FrontEndName>
                    ))}
                </FrontEnd>
                <BackEnd>
                    {backEndData.map((user) => (
                            <BackEndName key={user.id} image={user.image}> {user.name}</BackEndName>
                    ))}
                </BackEnd>
                <OtherSkill>
                    {otherSkills.map((user) => (
                            <OtherSkillsName key={user.id} image={user.image}> {user.name}</OtherSkillsName>
                    ))}
                </OtherSkill>
            </Skills>

        </Container>
    )
}

const Container = styled.div`
    overflow: hidden;
    position: relative;
    top: 0;
    bottom: 0;
    height: 1000px;
    background-image: url(${BackgroundImage});
    object-fit:cover;
    background-size: cover;
    background-position: center;
`

const Skills = styled.div`
    display:flex;
    justify-content: space-between;
    color: white;
    font-weight: bold;
    padding: 50px;
`

const FrontEnd = styled.ul`
    margin-right:50px;
    background-color: #494D5F;
    width: 20%;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const FrontEndName = styled.li`
    font-size: 1.5em;
    list-style-type: none;
    padding: 10px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 30px 30px;
    padding-left: 40px;
    line-height: 1.5;

    &:hover {
    cursor: pointer;
    }
`;

const BackEnd = styled.ul`
    background-color: #494D5F;
    width: 20%;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const BackEndName = styled.li`
    font-size: 1.5em;
    list-style-type: none;
    padding: 10px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 30px 30px;
    padding-left: 40px;
    line-height: 1.5;

    &:hover {
    cursor: pointer;
    }
`;

const OtherSkill = styled.ul`
    background-color: #494D5F;
    width: 20%;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const OtherSkillsName = styled.li`
    font-size: 1.5em;
    list-style-type: none;
    padding: 10px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 50px 50px;
    padding-left: 40px;
    line-height: 1.5;

    &:hover {
    cursor: pointer;
    }
`;



const Languages = styled.p`
    text-align: center;
    font-size:2em;
    color: white;
    font-weight: bold;
`



export default About