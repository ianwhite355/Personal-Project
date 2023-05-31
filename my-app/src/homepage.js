import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgroundImage from "./images/backgroundimg.webp";
import { projectData } from './projectdata';

export const HomePage = () => {
    return (
        <Background>
            <Skills>
                <Title>Full Stack Developer</Title>
                <Languages>Languages I am fluent include:</Languages>
                <WichOnes>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Node</li>
                </WichOnes>
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
    color: white;
    font-weight: bold;
    padding: 50px;
`

const Title = styled.p`
    font-size:3em;

`

const Languages = styled.p`
    font-size:2em;
`

const WichOnes = styled.ul`
`

const TheList = styled.li`
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
    top: 65%;
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