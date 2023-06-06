import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgroundImage from "./images/backgroundimg.png";
import { projectData } from './dataproject';

const Project = () => {
    return (
        <Background>
            <Title>Some Of My Work</Title>
            <MyProjects>
                <Projects>
                {projectData.map((user) => (
                    <ADiv key={user.id}>
                        <ProjectImg src={user.image} alt={user.name} />
                        <ProjectName>{user.name}</ProjectName>
                        <ProjectStatus>{user.status}</ProjectStatus>
                        <Link to={user.github} target="blank">
                            <GitHub>Click for the Github Repo</GitHub>
                        </Link>
                        <Link to={user.active} target="blank">
                            <Active>Click here for the active website</Active>
                        </Link>

                    </ADiv>
                ))}
                </Projects>
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


const Title = styled.p`
    font-size:3em;
    text-align: center;
    color: white;
    font-weight: bold;
    position: relative;
    bottom: 10px;
`


const MyProjects = styled.div`
    align-items: center;
    height: 100%;
    

`

const MyText = styled.p`
    position: relative;
    bottom:40px;
    text-align:center;
    color: white;
    font-size: 2em;
    font-weight: bold;
`

const Projects = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 58%;
    left: 50%;
    transform:translate(-50%,-50%);
    color: white;
    background-color: rgba(73, 77, 95, 0.9);
    width: 80%;
    border-radius: 15px;
`

const ADiv = styled.div`
    position: relative;
    margin:15px;
`;

const ProjectImg = styled.img`
    border-radius: 15px;
    width: 350px;
    height: 350px;
    object-fit: cover;
    opacity: 1;
    transition: opacity 0.3s ease;
    ${ADiv}:hover & {
        opacity: 0.5;
    }
`;

const ProjectName = styled.p`
    background-color: rgba(73, 77, 95, 0.8);
    width:300px;
    padding: 10px;
    font-weight: bold;
    position: absolute;
    top: 25%;
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
    background-color: rgba(73, 77, 95, 0.8);
    width:300px;
    padding: 10px;
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
    background-color: rgba(73, 77, 95, 0.8);
    width:300px;
    padding: 10px;
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
    background-color: rgba(73, 77, 95, 0.8);
    width:300px;
    padding: 10px;
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



export default Project
