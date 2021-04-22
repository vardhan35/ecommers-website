import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Navbar = ({cartitem}) => {
    const [count, setcount] = useState(0);
    useEffect(()=>{
        let count = 0;
        cartitem.forEach(item => {
            count += item.qty;
        });
        setcount(count)
    }, [cartitem, count])
    // console.log('Navbar', count)
    return (
        <NavBar>
            <NavLinks>
                <li><Link to='/'>Home</Link></li>
                <li>
                    <CartDiv>
                        <Link to='/cart'>Cart</Link>
                        : {count}
                    </CartDiv>
                </li>
            </NavLinks>
        </NavBar>
    )
}

const mapStateToProps= state =>{
    return{
        cartitem : state.shop.cart,
    }
}

export default connect(mapStateToProps)(Navbar)




const NavBar = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    font-size: 1.4rem;
    margin:auto;
    height:50px;
    justify-content:center;
    background-color:#487e95;
`

const NavLinks = styled.ul`
    height:100%;
    max-width:500px;
    display:flex;
    list-style:none;
    text-decoration:none;
    margin:auto;
    li{
        margin:auto;
    }

    a{
        text-decoration:none;
        padding:0.3em;
        border-radius:0.25em;
        color:#d9dab0;
        margin:auto;
    }
    a:hover{
        color:#d9dab0;
        background-color:#23689b;
    }
`

const CartDiv = styled.div`
    color:#d9dab0;
    border-radius:0.25em;
    padding:0.3em;
    cursor: pointer;
    :hover {color:#d9dab0;
    background-color:#23689b;
    }
`

