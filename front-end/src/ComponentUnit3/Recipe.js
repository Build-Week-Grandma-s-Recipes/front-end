
import React, {useState,useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import'./css/Recipe.css'
import {useHistory}from 'react-router-dom'
import axiosWithAuth from './AxiosWithAuth'

const Recipe = (props) => {
    const history = useHistory()
    const iDrecipe = props.match.params.id
    const [recipeFind,setRecipeFind] = useState([])
    useEffect(()=>{
        axiosWithAuth()
        .get('https://node-buildwk-cookbook.herokuapp.com/api/recipes')
        .then(res =>{
            console.log(res)
           let i =  res.data.filter(x=> iDrecipe.includes(x.id) )
        //    console.log(iDrecipe)
        //    console.log(i[0])   
           setRecipeFind(i[0]) 
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const deleteRecipe = Recipe => {
        axiosWithAuth()
        .delete(`/api/recipes/${iDrecipe}`)
        .then(res =>{
        //   console.log(res)
          history.push('/home')
        })
        .catch(err =>{
          console.error(err)
        })
    };
  
    return(
        <div className='recipeI'>
        <Header/>
        <div className='cardRecipe'>
            <div className='cardText'>
                <p>Recipe: {recipeFind.recipe}</p>
                <p>Source: {props.source}</p>
                <p>Ingredients: {props.ingredient} {props.quantity} {props.metric}</p>
                <p>Category: {recipeFind.category}</p>
                <p>Instruction: {props.instruction}</p>
            </div>
            <div className='recipeBut'>
                <button>Update</button>
                <button onClick={deleteRecipe}>Delete</button>
            </div>
        </div>
        <Footer/>
        </div>
    )
    }

export default Recipe