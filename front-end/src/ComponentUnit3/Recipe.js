
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
    const[instru,setInstru] = useState([])
    const[ingre,setIngre] = useState([])
    useEffect(()=>{
        axiosWithAuth()
        .get(`https://node-buildwk-cookbook.herokuapp.com/api/recipes/${iDrecipe}`)
        .then(res =>{
            console.log(res.data)
        //    let i =  res.data.filter(x=> iDrecipe.includes(x.id) )
        //    console.log(iDrecipe)
        //    console.log(i[0])   
           setRecipeFind(res.data) 
           setInstru(res.data.instructions)
           setIngre(res.data.ingredients)
        })
        .catch(err=>{
            console.log(err)
        })
    },[iDrecipe])
    const updateButton = a =>{
        a.preventDefault();
          history.push(`/edit/${iDrecipe}`)

    }

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
                <p>Recipe: {recipeFind.recipe_name}</p>
                <p>Source: {recipeFind.source_name}</p>
                <p className='ing'>Ingredients:<div> {ingre.map(e=>{
                    return<p className='recipeText'>{e.ingredient_name}</p> 
                })}</div></p>
                <p>Category: {recipeFind.category}</p>
                <p className='ing'>Instruction:<div>{instru.map(e=>{
                    return<p className='recipeText'>{e.instruction_text}</p>
                })}</div> </p>
            </div>
            <div className='recipeBut'>
                <button onClick={updateButton}>Update</button>
                <button onClick={deleteRecipe}>Delete</button>
            </div>
        </div>
        <Footer/>
        </div>
    )
    }

export default Recipe