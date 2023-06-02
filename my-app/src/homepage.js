import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundImage from "./images/backgroundimg.webp";
import { frontEndData } from './dataskills';
import { backEndData } from './dataskills';
import { otherSkills } from './dataskills';

const HomePage = () => {
    return (
        <Container>
            <Title>Full Stack Developer</Title>
            <Introduction>
                <MyImage>I will add a photo shortly,<br></br>taking updated photos soon.</MyImage>
                <IntroText>
                    <h1>About me</h1>
                    <p>
                        Introducing me, Ian White, a talented full-stack developer with a passion for creating innovative web solutions.
                        With a creative mindset and expertise in various programming languages, I craft user-friendly applications
                        that deliver seamless experiences. Collaborative and detail-oriented, I excels at turning ideas into reality,
                        ensuring client satisfaction every step of the way. I will add some bullet points in the following once I know what to add really.
                    </p>

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
    /* height: 1000px; */
    background-image: url(${BackgroundImage});
    object-fit:cover;
    background-size: cover;
    background-position: center;
`

const Title = styled.h3`
    font-size:3em;
    text-align: center;
    color: white;
    font-weight: bold;
`

const Introduction = styled.div`
    display:flex;
    color: white;

`

const MyImage = styled.p`
    /* soon to be an image here */
    margin:200px;
    
`

const IntroText = styled.div`
    transform: translate(-50%);
    position: absolute;
    left: 50%;
    top:250px;
    background-color: rgba(73, 77, 95, 0.8);
    padding: 15px;
`


const Skills = styled.div`
    display:flex;
    justify-content: space-around;
    color: white;
    font-weight: bold;
    padding: 50px;
    position: relative;
    bottom: 100px;
`

const FrontDiv = styled.div`
    display:inline-block;
`

const FrontEnd = styled.ul`
    background-color: #494D5F;
    width: 300px;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const FrontEndTitle = styled.h3`
    text-align: center;
    font-size:2em;
    background-color: rgba(73, 77, 95, 0.7);
    width: 200px;
    margin: 0 auto;
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

const BackDiv = styled.div`
    display:inline-block;
`


const BackEnd = styled.ul`
    background-color: #494D5F;
    width: 300px;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const BackEndTitle = styled.h3`
    text-align: center;
    font-size:2em;
    background-color: rgba(73, 77, 95, 0.7);
    width: 200px;
    margin: 0 auto;
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
`

const OtherDiv = styled.div`
    display:inline-block;
`

const OtherSkill = styled.ul`
    background-color: #494D5F;
    width: 300px;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const OtherTitle = styled.h3`
    text-align: center;
    font-size:2em;
    background-color: rgba(73, 77, 95, 0.7);
    width: 200px;
    margin: 0 auto;
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
    position: relative;
    bottom:100px;
`



export default HomePage