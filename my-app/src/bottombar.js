
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