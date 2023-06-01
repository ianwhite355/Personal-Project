
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const Bottombar = () => {
    return (
        <Bottom>
            <Text>If you were impressed by this website please consider cotacting me, my information is in the contact in the header</Text>

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