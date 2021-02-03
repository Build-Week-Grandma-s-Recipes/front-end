import React, {useState} from 'react'
import './css/AddRecipe.css'

import Footer from './Footer'
import Header from './Header'
import axiosWithAuth from './AxiosWithAuth'


function ItemAdd (props) {
        
    const emptyItem = {
        recipe_name: '',
        source_name: '',
        // instructions:[{instruction1:'', instruction2:'', instruction3:'', instruction4:'', instruction5:''}],
        // ingredients:[{ingredient1:'', ingredient2:'', ingredient3:'', ingredient4:''}],
        category_id:1
    };  
        const [form, setForm] = useState(emptyItem);
        const [buttonDisable, setButtonDisable] = useState(true);
        const [errors, setErrors] = useState({recipe_name: '',source_name: ''});
        const [submitComplete, setSubmitComplete]=useState(false)
            const inputChange = (e) => {
                    e.persist();
                    setForm({...form,[e.target.name]:e.target.value});
                    
                    console.log(form)
                    
            };
            // const inChange = e =>{
            //     e.persist()
            //     setForm({...form {...ingredients, [e.target.name]:e.target.value})})
            //     // final.ingredients[0] = {...itm}
            //     console.log(final)
            // }
            // const inTChange =e =>{
            //     e.persist()
            //     setInstru({...instru,[e.target.name]:e.target.value})

            //     console.log(instru)
            // }
            const formSubmit = (e) => {
                    e.preventDefault();
                    console.log(form)
                    axiosWithAuth()
                        .post('/api/recipes',
                         form,
                        {headers:{authorization:localStorage.getItem('token')}
                    })
                        .then(resp=>{
                            console.log(resp)
                            setSubmitComplete(true)
                            setForm(emptyItem)
                        })
                        .catch(err=>{
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
                    <form className='form' onSubmit={formSubmit}>
                        <div className='input'>
                        <div class="form-group">
                            <label >Recipe Name</label>
                            <p className='error'>{errors.recipe_name}</p>
                            <input className='inputRecipe' type="text" name='recipe_name' id='recipe_name' onChange={inputChange} className="form-control" placeholder="Recipe Name"/>
                        </div>
                        <div class="form-group">
                            <label>Source</label>
                            <p className='error'>{errors.source_name}</p>
                            <input className='inputRecipe' type="text" name='source_name' id='source_name' onChange={inputChange} className="form-control" placeholder="Source"/>
                        </div>
                       
                        <div className = 'ingredientForm'>
                    
                                <div class="form-group">
                                    <label>Ingredients 1</label>
                                    <input className='inputRecipe' type="text" name='ingredient1' id='ingredient1' className="form-control" onChange={inputChange} placeholder="Ingredients 1"/>
                                </div>
                                <div class="form-group">
                                    <label>Ingredients 2</label>
                                    <input className='inputRecipe' type="text" name='ingredient2' id='ingredient2' className="form-control" onChange={inputChange} placeholder="Ingredients 2"/>
                                </div>
                                <div class="form-group">
                                    <label>Ingredients 3</label>
                                    <input className='inputRecipe' type="text" name='ingredient3' id='ingredient3' className="form-control" onChange={inputChange} placeholder="Ingredients 3"/>
                                </div>
                                <div class="form-group">
                                    <label>Ingredients 4</label>
                                    <input className='inputRecipe' type="text" name='ingredient4' id='ingredient4' className="form-control" onChange={inputChange} placeholder="Ingredients 4"/>
                                </div>
                                <div class="form-group option">
                                </div>
                            <div class="form-group  category">
                            {/* <label>Category </label>
                                <select name='category_id'  id='category_id'>
                                    <option value='entree' onChange={inputChange}>Entree</option>
                                    <option value='main' onChange={inputChange}>Main</option>
                                    <option value='dessert' onChange={inputChange}>Dessert</option>
                                </select>
                                <p className='error'>{errors.category}</p> */}
                                
                            </div>
                        </div>
                        </div>
                        <div className='instruction'>
                        <div class="form-group">
                            <label>Step 1</label>
                            <p className='error'>{errors.instruction}</p>
                            <textarea type="text" name='instruction1' id='instruction1' onChange={inputChange} className="form-control" placeholder="Step 1"/>
                        </div>
                        <div class="form-group">
                            <label>Step 2</label>
                            <p className='error'>{errors.instruction}</p>
                            <textarea type="text" name='instruction2' id='instruction2' onChange={inputChange} className="form-control" placeholder="Step 2"/>
                        </div>
                        <div class="form-group">
                            <label>Step 3</label>
                            <p className='error'>{errors.instruction}</p>
                            <textarea type="text" name='instruction3' id='instruction3' onChange={inputChange} className="form-control" placeholder="Step 3"/>
                        </div>
                        <div class="form-group">
                            <label>Step 4</label>
                            <p className='error'>{errors.instruction}</p>
                            <textarea type="text" name='instruction4' id='instruction4' onChange={inputChange} className="form-control" placeholder="Step 4"/>
                        </div>
                        <div class="form-group">
                            <label>Step 5</label>
                            <p className='error'>{errors.instruction}</p>
                            <textarea type="text" name='instruction5' id='instruction5' onChange={inputChange} className="form-control" placeholder="Step 5"/>
                        </div>
                        <button type="submit"  className="btn submitBtn">Add Recipe</button>
                        </div>
                    </form>
                    
                    
                </div>
                <Footer/>
            </div>  
            </div>
            
            
            )
    }
    
    export default ItemAdd