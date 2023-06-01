import styled from "styled-components"
import BackgroundImage from "./images/backgroundimg.webp";


const Contact = () => {
    return (
        <Container>
            <Title>Ways to contact me</Title>
            <Phone>Mobile Phone: 514-557-3347</Phone>
            <Gmail>Gmail: ianwhite355@gmail.com</Gmail>
            <LinkedIn>LinkedIn: ianwhite355 or click the linkedIn logo on the top right</LinkedIn>
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

const Phone = styled.p`
`

const Gmail = styled.p`

`

const LinkedIn = styled.p`
`

export default Contact
