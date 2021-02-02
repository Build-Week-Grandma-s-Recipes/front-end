
import axios from 'axios'
import React from 'react'
import Footer from './Footer'
import Header from './Header'


const Recipe = (props) => {
    console.log(props.match.params.id)
axios.get('https://node-buildwk-cookbook.herokuapp.com/api/recipes')
    .then(res =>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })

    return(
        <div>
        <Header/>
        <div className='card'>
            <div className='text'>
                <p>Recipe: {props.recipe}</p>
                <p>Source: {props.source}</p>
                <p>Ingredients: {props.ingredient} {props.quantity} {props.metric}</p>
                <p>Category: {props.category}</p>
                <p>Instruction: {props.instruction}</p>
            </div>
        </div>
        <Footer/>
        </div>
    )
    }

export default Recipe