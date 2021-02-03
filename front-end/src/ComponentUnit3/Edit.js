
import React, {useState,useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import'./css/Recipe.css'
import {useHistory}from 'react-router-dom'
import axiosWithAuth from './AxiosWithAuth'

const Edit = (props) => {
    const history = useHistory()
    const iDrecipe = props.match.params.id
    const [item,setItem] = useState([])
    useEffect(()=>{
        axiosWithAuth()
        .get('https://node-buildwk-cookbook.herokuapp.com/api/recipes')
        .then(res =>{
            console.log(res)
           let i =  res.data.filter(x=> iDrecipe.includes(x.id) )
        //    console.log(iDrecipe)
        //    console.log(i[0])   
           setItem(i[0]) 
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
    
    const changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;      
      setItem({
        ...item,
        [ev.target.name]: value
      });
    };
  
    return(

            <div className='itemBody'>
                <div className='homeBody'>
                <Header/>
                <div className='bar'>
                </div>
                <div className='mainForm'>
                    <form className='form' >
                        <div class="form-group">
                            <label >Recipe Name</label>
                            <input type="text" name='recipe' id='recipe' onChange={changeHandler} className="form-control" placeholder="Recipe Name"/>
                        </div>
                        <div class="form-group">
                            <label>Source</label>
                            <input type="text" name='source' id='source' onChange={changeHandler} className="form-control" placeholder="Source"/>
                        </div>
                        <div className = 'ingredientForm'>
                            <div class="form-group">
                                <label>Ingredients</label>
                                <input type="text" name='ingredients' id='ingredients' className="form-control" onChange={changeHandler} placeholder="Ingredients"/>
                            </div>
                            <div class="form-group option">
                            <div class="form-group">
                                <label>quantity</label>
                                <input type="text" name='quantity' id='quantity' className="form-control" onChange={changeHandler} placeholder="quantity"/>
                            
                                <select id='metric'>
                                    <option value='grams' onChange={changeHandler}>Grams</option>
                                    <option value='milliliter'onChange={changeHandler}>Milliliter</option>
                                    <option value='unit' onChange={changeHandler}>Unit</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Instruction</label>
                             <textarea type="text" name='instruction' id='instruction' onChange={changeHandler} className="form-control" placeholder="Instruction"/>
                        </div>
                        <div class="form-group  category">
                            <label>Category: </label>
                                <select id='category'>
                                    <option value='entree' onChange={changeHandler}>Entree</option>
                                    <option value='Main'onChange={changeHandler}>Main</option>
                                    <option value='Dessert' onChange={changeHandler}>Dessert</option>
                                </select>
                        </div>
                        <button type="submit"  className="btn submitBtn">Update Recipe</button>
                        
                    </form>
                    
                    
                </div>
                <Footer/>
            </div>  
            </div>
            
            
            )
    }
    
export default Edit