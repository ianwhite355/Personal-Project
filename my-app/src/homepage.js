import React, { useState, useContext, useEffect, useRef } from 'react';
import styled, { keyframes} from 'styled-components';
import BackgroundImage from "./images/backgroundimg.png";
import { frontEndData } from './dataskills';
import { backEndData } from './dataskills';
import { otherSkills } from './dataskills';
import mySelf from "./images/myself.jpg"
import emailjs from '@emailjs/browser';




const progressBarAnimation = keyframes`
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0); }
`;

const HomePage = () => {


    const form = useRef();
    const [successMessage, setSuccessMessage] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        let timer;
        if (showSuccessMessage) {
            timer = setTimeout(() => {
            setShowSuccessMessage(false);
            }, 5000);
        }

        return () => clearTimeout(timer);
    }, [showSuccessMessage]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f2jwoos', 'template_sj5nnmo', form.current, 'EEwDD0w5lZNfVQ4V3')
        .then((result) => {
            console.log(result.text);
            setSuccessMessage("Message sent");
            setShowSuccessMessage(true);
        })
        .catch((error) => {
            console.log(error.text);
        });
    };

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
                
                <FormEmail ref={form} onSubmit={sendEmail}>
                    <EmailTitle>Send me an Email!</EmailTitle>
                    <FormName>Your Name</FormName>
                    <FormInput type="text" name="user_name" />
                    <FormMail>Your Email</FormMail>
                    <FormInput type="email" name="user_email" />
                    <FormMessage>What would you like to say?</FormMessage>
                    <FormTextarea name="message" />
                    <FormButton type="submit">Send</FormButton>
                </FormEmail>

                <SuccessContainer>
                    {showSuccessMessage && (
                        <SuccessWrapper>
                            <SuccessMessage>{successMessage}</SuccessMessage>
                            <ProgressBar />
                        </SuccessWrapper>
                    )}
                </SuccessContainer>
            

        </Container>
    )
}


const Container = styled.div`
    display: block;
    position: relative;
    overflow: hidden;
    top: 0;
    bottom: 0;
    height: auto;
    background-image: url(${BackgroundImage});
    object-fit: cover;
    background-size: cover;
    background-position: center;

    @media (min-width: 1922px) and (max-width: 2560px) {
        
    }
`;


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
    
    @media (min-width: 200px) and (max-width: 700px) {
        width: 80%;
    }
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

const FormEmail = styled.form`
    color: white;
    position: absolute;
    left: 50%;
    bottom: 80px;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    width:400px;
`

const EmailTitle = styled.h3`
    font-size: 2em;
    margin: 10px;

`

const FormName = styled.label`
`;

const FormMail = styled.label`
`

const FormInput = styled.input`
    margin-bottom: 10px;
    padding: 8px;
`


const FormMessage = styled.label`
`

const FormTextarea = styled.textarea`
    margin-bottom: 10px;
    padding: 8px;
`




const FormButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }
`

const SuccessContainer = styled.div`
    position: fixed;
    top: 20px;
    right: 50px;
`;

const SuccessWrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    background-color: #4caf50;

    border-radius: 5px;
`;

const SuccessMessage = styled.div`
    color: white;
    /* transform: translateX(100%); */
    padding: 20px;
    font-size:1.5em;
`;

const ProgressBar = styled.div`
    position: relative;
    bottom: 0px;
    width: 200px;
    height: 10px;
    background-color: #2E1A47;
    animation: ${progressBarAnimation} 5s linear forwards;
    transform-origin: left;
    transform: translate(-100%);
    transform: scaleX(1);
    border-radius: 5px;
`;






export default HomePage