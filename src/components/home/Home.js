import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Item from './Item'

const Home = ({products}) => {
    // console.log('Home', products)
    return (
        <HomeDiv>
            {
                products.map((items)=>{
                    return <Item key={items.id} itemData={items} />
                })
            }
            
        </HomeDiv>
    )
}

const mapStateToProps = state =>{
    // console.log('state', state)
    return{
        products : state.shop.products
    }
}
export default connect(mapStateToProps)(Home)

const HomeDiv = styled.div`
    margin: 70px auto 70px auto;
`