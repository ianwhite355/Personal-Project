import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundImage from "./images/backgroundimg.png";
import { frontEndData } from './dataskills';
import { backEndData } from './dataskills';
import { otherSkills } from './dataskills';
import mySelf from "./images/myself.jpg"

const HomePage = () => {
    return (
        <Container>
            <Title>Full Stack Developer</Title>
            <AboutMe>About me</AboutMe>
            <Introduction>
                <MyImage src={mySelf}/>
                <IntroText>
                    Introducing me, Ian White, a talented full-stack developer with a passion for creating innovative web solutions.
                    With a creative mindset and expertise in various programming languages, I craft user-friendly applications
                    that deliver seamless experiences. Collaborative and detail-oriented, I excels at turning ideas into reality,
                    ensuring client satisfaction every step of the way. I will add some bullet points in the following once I know what to add really.
                </IntroText>
            </Introduction>

            <Languages>Skills</Languages>
            <Skills>

                <FrontDiv>
                    <FrontEndTitle>Front-End</FrontEndTitle>
                    <FrontEnd>
                        {frontEndData.map((user) => (
                            <FrontEndName key={user.id} image={user.image}> {user.name}</FrontEndName>
                        ))}
                    </FrontEnd>
                </FrontDiv>

                <BackDiv>
                    <BackEndTitle>Back-End</BackEndTitle>
                    <BackEnd>
                        {backEndData.map((user) => (
                            <BackEndName key={user.id} image={user.image}> {user.name}</BackEndName>
                        ))}
                    </BackEnd>
                </BackDiv>

                <OtherDiv>
                    <OtherTitle>Other Skills</OtherTitle>
                    <OtherSkill>
                        {otherSkills.map((user) => (
                            <OtherSkillsName key={user.id} image={user.image}> {user.name}</OtherSkillsName>
                        ))}
                    </OtherSkill>
                </OtherDiv>
            </Skills>

        </Container>
    )
}

const Container = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    top: 0;
    bottom: 0;
    height: 1100px;
    background-image: url(${BackgroundImage});
    object-fit:cover;
    background-size: cover;
    background-position: center;

    @media (min-width: 1922px) and (max-width: 2560px) {
        height: 1290px;
    }
`

const Title = styled.h3`
    font-size:4em;
    text-align: center;
    color: white;
    font-weight: bold;
`

const Introduction = styled.div`
    /* display:flex; */
    color: white;

`

const AboutMe = styled.h3`
    font-size: 2.4em;
    color:white;
    position: absolute;
    left: 50%;
    top:175px;

    @media (min-width: 1922px) and (max-width: 2560px) {
        font-size: 3.2em;
        padding: 10px;
    }

    transform: translate(-50%);
`

const MyImage = styled.img`
    position: relative;
    bottom: 150px;
    border-radius: 20px;
    margin:200px;
    width: 10%;
    height: auto;
    
`

const IntroText = styled.p`
    transform: translate(-50%);
    position: absolute;
    left: 50%;
    top:300px;
    background-color: rgba(73, 77, 95, 0.8);
    padding: 15px;
    border-radius: 15px;
    font-size:1.2em;
`



const Skills = styled.div`
    display:flex;
    justify-content: space-around;
    color: white;
    font-weight: bold;
    padding: 50px;
    position: relative;
    bottom: 375px;
`

const FrontDiv = styled.div`
    display:inline-block;
`

const FrontEnd = styled.ul`
    background-color: #494D5F;
    width: 300px;
    height: 290px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 15px;
    @media (min-width: 1922px) and (max-width: 2560px) {
        width: 330px;
        height: 320px;
    }
`

const FrontEndTitle = styled.h3`
    text-align: center;
    font-size:2em;
    background-color: rgba(73, 77, 95, 0.7);
    width: 200px;
    margin: 0 auto;
    border-radius: 10px;
    @media (min-width: 1922px) and (max-width: 2560px) {
        font-size: 2.5em;
        padding: 10px;
    }
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

    @media (min-width: 1922px) and (max-width: 2560px) {
        font-size: 2em;
    }

    &:hover {
    cursor: pointer;
    }
`;

const BackDiv = styled.div`
    display:inline-block;
`


const BackEnd = styled.ul`
    background-color: #494D5F;
    width: 300px;
    height: 290px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 15px;
    @media (min-width: 1922px) and (max-width: 2560px) {
        width: 330px;
        height: 320px;
    }
`

const BackEndTitle = styled.h3`
    text-align: center;
    font-size:2em;
    background-color: rgba(73, 77, 95, 0.7);
    width: 200px;
    margin: 0 auto;
    border-radius: 10px;
    @media (min-width: 1922px) and (max-width: 2560px) {
        font-size: 2.5em;
        padding: 10px;
    }
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

    @media (min-width: 1922px) and (max-width: 2560px) {
        font-size: 2em;
    }

    &:hover {
    cursor: pointer;
    }
`

const OtherDiv = styled.div`
    display:inline-block;
`

const OtherSkill = styled.ul`
    background-color: #494D5F;
    width: 300px;
    height: 290px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 15px;
    @media (min-width: 1922px) and (max-width: 2560px) {
        width: 330px;
        height: 320px;
    }
`

const OtherTitle = styled.h3`
    text-align: center;
    font-size:2em;
    background-color: rgba(73, 77, 95, 0.7);
    width: 200px;
    margin: 0 auto;
    border-radius: 10px;

    @media (min-width: 1922px) and (max-width: 2560px) {
        width: 240px;
        font-size: 2.5em;
        padding: 10px;
    }
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

    @media (min-width: 1922px) and (max-width: 2560px) {
        font-size: 2em;
    }

    &:hover {
    cursor: pointer;
    }
`;



const Languages = styled.p`
    text-align: center;
    font-size:2.4em;
    color: white;
    font-weight: bold;
    position: relative;
    bottom:325px;
    @media (min-width: 1922px) and (max-width: 2560px) {
        font-size: 3.2em;
        padding: 10px;
        bottom:325px;
    }
`



export default HomePage