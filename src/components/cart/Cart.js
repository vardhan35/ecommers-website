import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import styled from 'styled-components'

const Cart = ({cartitem}) => {
    // console.log('CartItem', cartitem)
    return (
        <CartDiv>
            {
                cartitem.length === 0 ? <h1>😒Cart Empty😒</h1> : cartitem.map((cartData)=>{
                    return <CartItem key={cartData.id} cartData={cartData} />
                })
            }
        </CartDiv>
    )
}

const mapStateToProps = state =>{
    return{
        cartitem : state.shop.cart,
    }
}

export default  connect(mapStateToProps)(Cart)

const CartDiv = styled.div`
    margin: 70px auto 70px auto;
    max-width:600px;
    width:90%;
    h1{
        margin:auto;
        text-align:center;
    }
`