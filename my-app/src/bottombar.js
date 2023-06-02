
import React from 'react';
import styled from 'styled-components';

const Bottombar = () => {
    return (
        <Bottom>
            <Text>This website is temporary, I will to fix things like the about page and the contact so itlooks good, and contact page so it links to my contacts</Text>

        </Bottom>
    )
}



const Bottom = styled.footer`
    overflow: hidden;
    background-color: rgba(73, 77, 95, 0.8);
    height: 75px;
    margin: 0;
`

const Text = styled.h3`
    position: relative;
    bottom: 10px;
    padding:0px;
    font-size: 1.8em;
    color: white;
    text-align:center;
`


export default Bottombar