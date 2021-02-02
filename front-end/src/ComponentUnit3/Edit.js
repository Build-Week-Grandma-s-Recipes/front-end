
import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import './css/AddRecipe.css'
import Footer from './Footer'
import Header from './Header'
function ItemEdit (props) {
        
    const emptyItem = {
        recipe: '',
        source: '',
        ingredients: '',
        quantity:'',
        metric:'',
        instruction:'',
        category:''
    };
    const UpdateForm = props => {
        const { push } = useHistory();
        const [item, setItem] = useState(emptyItem);
        const { id } = useParams();
        // const { id } = props.match.params;
      
        useEffect(()=>{
          axios.get(`http://localhost:3333/itemById/${id}`)
          .then(res =>{
            setItem(res.data)
          })
          .catch(err =>{
            console.log(err)
          })
        }, [])
       
        const changeHandler = ev => {
          ev.persist();
          let value = ev.target.value;      
          setItem({
            ...item,
            [ev.target.name]: value
          });
        };
      
        const handleSubmit = e => {
          e.preventDefault();
          axios
            .put(`http://localhost:3333/items/${id}`, item)
            .then(res=>{
              props.setItems(res.data)
            })
            .catch(err =>{
              console.log(err)
            })
      
    
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
    }}
    
    export default ItemEdit