import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { removeFromCart, addjustQty } from '../../redux/cart/cartActions'




const CartItem = ({cartData,adjustQty, removeFromCart}) => {
    // console.log('cartData', cartData)
    const [inPut, setInPut] = useState(cartData.qty);
    console.log('CartData.qty', cartData.qty)
    const onChangeHandler = (e)=>{
        e.preventDefault();
        setInPut(e.target.value);
        adjustQty(cartData.id,e.target.value )
    }
    // console.log('InPut', inPut)
    return (
        <Cartdiv>
            <Image><img src={cartData.image} alt=""/></Image>
            <Cartinfo>
                <H2>{cartData.name}</H2>
                <CartAction>
                <Button type='button'  onClick={()=>removeFromCart(cartData.id)} >Remove From Cart</Button>
                <Qty>
                    <label htmlFor="qty">Qty : </label>
                    <input type="number" name='qty' id='qty' min='1' value={inPut} onChange={onChangeHandler} />
                </Qty>
                </CartAction>
            </Cartinfo>
        </Cartdiv>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        removeFromCart : (id)=>dispatch(removeFromCart(id)),
        adjustQty : (id, value) => dispatch(addjustQty(id, value)),
    }
}

export default connect(null, mapDispatchToProps)(CartItem)

const Cartdiv = styled.div`
    max-width : 600px;
    width : 90%;
    margin :1em auto;
    display:flex;
    @media (max-width: 450px){
        display:flex;
        flex-direction:column;
        text-align:center;
        justify-content:center;
        background-color:#d9dab0;
        border-radius:0.5em;
    }
`

const Cartinfo = styled.div`
    width:70%;
    padding-left:0.25em;
    border-radius:0 0.8em 0.8em 0;
    background-color:#d9dab0;
    @media (max-width: 450px){
        margin:auto;
    }

`

const Image = styled.image`
    img{
    max-width : 200px;
    max-height : 200px;
    background-color:white;
    margin: auto;
    border-radius:0.8em 0 0 0.8em;
    @media (max-width: 450px){
        border-radius:0;
        margin:1em auto;
    }    
    }
`

const H2 = styled.h2`
    font-size:1.5rem;
    margin:0 auto 0.35em auto;
`

const CartAction = styled.div`
    display: flex;
    @media (max-width: 450px){
        display:flex;
        flex-direction:column;
    }   
` 

const Button = styled.button`
    margin: 1em auto 1em 0;
    font-size:1rem;
    padding:0.5em;
    border-radius:0.25em;
    border:none;
    cursor: pointer;
    background-color:#23689b;
    @media (max-width: 450px){
        width:90%;
        height:40px;
        margin:1em auto;
    }
`
const Qty = styled.div`
    margin: auto;
    color:black;
    input{
    font-size:1rem;
    margin:auto;
    width:30px;
    height:30px;
    margin:auto;
    color:black;
    padding:1em;
    }
    @media (max-width: 450px){
        margin:1em auto;
    }
`

// const Input = styled.input`
//     font-size:1rem;
//     margin:auto;
//     width:30px;
//     height:30px;
//     margin:auto;
//     color:black;
//     padding:1em;
// `