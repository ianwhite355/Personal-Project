import styled from "styled-components"
import BackgroundImage from "./images/backgroundimg.png";


const Contact = () => {
    return (
        <Container>
            <Title>Ways to contact me</Title>
            <Text>
                <Phone>Call me or text me at 514-557-3347</Phone>
                <Gmail>Send me an eamil at ianwhite355@gmail.com</Gmail>
                <LinkedIn>My LinkedIn is ianwhite355 or you can click the logo on the top right</LinkedIn>
                <Temp>This page is by far the worse I will change things later just I wanna figure out how to link it to it brings them right to my eamil
                    I have some other things to do but this is the rough template like the projects page works really nice
                </Temp>
            </Text>
        </Container>
    )
}

const Container = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    top: 0;
    bottom: 0;
    height: 1000px;
    background-image: url(${BackgroundImage});
    object-fit:cover;
    background-size: cover;
    background-position: center;
    color:white;
`

const Title = styled.h1`
    font-size:3em;
    text-align: center;
`


const Text = styled.div`
    transform: translate(-50%);
    position: relative;
    left: 50%;
    text-align: center;
    display: block;
    font-size: 1.5em;
    width:600px;
`

const Phone = styled.p`
    background-color: rgba(73, 77, 95, 0.8);
`

const Gmail = styled.p`
    background-color: rgba(73, 77, 95, 0.8);

`

const LinkedIn = styled.p`
    background-color: rgba(73, 77, 95, 0.8);
`

const Temp = styled.p`
    background-color: rgba(73, 77, 95, 0.8);
`

export default Contact
