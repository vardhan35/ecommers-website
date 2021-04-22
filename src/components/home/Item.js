import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addToCart } from '../../redux/cart/cartActions'
const Item = ({itemData, addToCart}) => {

    return (
        <ItemDiv>
            <Image src={itemData.image} />
            <Iteminfo>
                <H2>{itemData.name}</H2>
                <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, rem.</P>
                <Button type='button'  onClick={()=>addToCart(itemData.id)} >Add To Cart</Button>
            </Iteminfo>
        </ItemDiv>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        addToCart : (id)=>dispatch(addToCart(id))
    }
}

export default connect(null,mapDispatchToProps)(Item)



const ItemDiv = styled.div`
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
const Image = styled.img`
    max-width : 200px;
    max-height : 200px;
    background-color:white;
    margin: auto;
    border-radius:0.8em 0 0 0.8em;
    @media (max-width: 450px){
        border-radius:0;
        margin:1em auto;
    }
    
`
const H2 = styled.h2`
    font-size:1.5rem;
    margin:0 auto 0.35em auto;
`
const Iteminfo = styled.div`
    width:70%;
    padding-left:0.25em;
    border-radius:0 0.8em 0.8em 0;
    background-color:#d9dab0;
    @media (max-width: 450px){
        margin:auto;
    }
`

const P = styled.p``

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
    }
`

