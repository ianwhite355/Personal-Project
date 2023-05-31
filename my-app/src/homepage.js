import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgroundImage from "./images/backgroundimg.webp";
import { projectData } from './dataproject';
import { frontEndData } from './datalang';
import { backEndData } from './datalang';
import { otherSkills } from './datalang';

export const HomePage = () => {
    return (
        <Background>
            <Title>Full Stack Developer</Title>
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

            <MyProjects>
                <MyText>My projects</MyText>
                <Project>
                {projectData.map((user) => (
                    <ADiv key={user.id}>
                        <ProjectImg src={user.image} alt={user.name} />
                        <ProjectName>{user.name}</ProjectName>
                        <ProjectStatus>{user.status}</ProjectStatus>
                        <Link to={user.github} target="blank">
                            <GitHub>Click for the Github Repository</GitHub>
                        </Link>
                        <Link to={user.active} target="blank">
                            <Active>Click here for the active website</Active>
                        </Link>

                    </ADiv>
                ))}
                </Project>
            </MyProjects>
        </Background>
    )

}

const Background = styled.div`
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



const Title = styled.p`
    font-size:3em;
    text-align: center;
    color: white;
    font-weight: bold;

`

const Languages = styled.p`
    text-align: center;
    font-size:2em;
    color: white;
    font-weight: bold;
`

const MyProjects = styled.div`
    /* display: block; */
    align-items: center;
    height: 100%;
    

`

const MyText = styled.p`
    text-align:center;
    color: white;
    font-size: 2em;
    font-weight: bold;
`

const Project = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 80%;
    left: 50%;
    transform:translate(-50%,-50%);
    color: white;
    background-color: #494D5F;
`

const ADiv = styled.div`
    position: relative;
    margin:10px;
`;

const ProjectImg = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    opacity: 1;
    transition: opacity 0.3s ease;
    ${ADiv}:hover & {
        opacity: 0.5;
    }
`;

const ProjectName = styled.p`
    font-weight: bold;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
    z-index: 1;
    ${ADiv}:hover & {
    opacity: 1;
    }
`;

const ProjectStatus = styled.p`
    font-weight: bold;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
    z-index: 1;
    ${ADiv}:hover & {
    opacity: 1;
    }
`;


const GitHub = styled.p`
    color: white;
    font-weight: bold;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
    z-index: 1;
    ${ADiv}:hover & {
    opacity: 1;
    }
`

const Active = styled.p`
    color: white;
    font-weight: bold;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
    z-index: 1;
    ${ADiv}:hover & {
    opacity: 1;
    }

`



export default HomePage