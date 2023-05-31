
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const Bottombar = () => {
    return (
        <Bottom>
            <Text>This is made by me, Ian whtie, if you are impressed please contact me at ianwhite355@gmail.com or click the linkedIn icon on the top right</Text>

        </Bottom>
    )
}



const Bottom = styled.footer`
    overflow: hidden;
    background-color: #494D5F;
    height: 100px;
    margin: 0;
`

const Text = styled.h3`
    padding:0px;
    font-size: 1.8em;
    color: white;
    text-align:center;
`


export default Bottombar