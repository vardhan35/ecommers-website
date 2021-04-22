import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <Errdiv>
            <h1>Wrong Address...</h1>
            <Button><Link to='/'>Go Back...</Link></Button>
        </Errdiv>
    )
}

export default Error

const Errdiv = styled.div`
    text-align:center;
    max-width:700px;
    width:90%;
    margin:70px auto;
    font-size:1rem;
`
const Button = styled.li`
    list-style:none;
    margin: 1em auto 1em 0;
    font-size:1rem;
    padding:0.5em;
    cursor: pointer;
    @media (max-width: 450px){
        width:90%;
        height:40px;
    }
    a{
    color:red;

    }
`