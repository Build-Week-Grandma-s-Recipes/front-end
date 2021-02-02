
// eslint-disable-next-line 
import React, {useState, useEffect} from 'react'
import './css/AddRecipe.css'
import * as yup from 'yup'
// import './cssPage/ItemEdit.css'
import Footer from './Footer'
import Header from './Header'
// import { axiosWithAuth } from './AxiosWithAuth'
// import axios from "axios"

function ItemAdd (props) {
        
    const emptyItem = {
        recipe: '',
        source: '',
        instruction1:'',
        instruction2:'',
        ingredients: '',
        quantity:'',
        metric:'',
        instruction3:'',
        instruction4:'',
        instruction5:'',
        category:''
    };
        const [form, setForm] = useState(emptyItem);
        // eslint-disable-next-line 
        const [buttonDisable, setButtonDisable] = useState(true);
        const [errors, setErrors] = useState({
            recipe: '',
            source: '',
            instruction1:'',
            category:''
        });
        // eslint-disable-next-line 
        const [submitComplete, setSubmitComplete]=useState(false)
    
        const formSchema = yup.object().shape({
                recipe: yup
                    .string()
                    .required()
                    .label('Recipe')
                    .min(4, 'Must be at least 4 characters.'),
                source: yup
                    .string()
                    .required()
                    .label('Source')
                    .min(4, 'Must be at least 4 characters.'),
                instruction1: yup
                    .string()
                    .required()
                    .label('Instruction')
                    .min(10, 'must be at least 10 characters.'),
                category: yup
                    .string()
                    .required()
                    .label('Category')
                    .min(10, 'must be at least 10 characters.'),
        })
                
            const validateChange = (e) => {
                yup
                    .reach(formSchema, e.target.name)
                    .validate(e.target.name === 'terms' ? e.target.checked : e.target.value)
                    .then((valid) => {
                        setErrors({
                            ...errors,
                            [e.target.name]: '',
                        });
                    })
                    .catch((err) => {
                        console.log(err);
    
                        setErrors({
                            ...errors,
                            [e.target.name]: err.errors[0],
                        });
                    });
            };    
            const inputChange = (e) => {
                    e.persist();
                    setForm({...form,[e.target.name]:e.target.value});
                    validateChange(e);
            };


            // const formSubmit = (e) => {
            //         e.preventDefault();
            //         console.log(form)
            //         axios
            //             .post('',
            //              form,
            //             {headers:{authorization:localStorage.getItem('token')}
            //         })
            //             .then(resp=>{
            //                 console.log(resp)
            //                 setSubmitComplete(true)
            //                 setForm(emptyItem)
            //             })
            //             .catch(err=>{
            //                 console.log(err)
            //             })
                    
            // };


            useEffect(() => {
                    formSchema.isValid(form).then((isValid) => {
                        setButtonDisable(!isValid);
                    });
            }, [form, formSchema]);
            

        return(

            <div className='itemBody'>
                <div className='homeBody'>
                <Header/>
                <div className='bar'>
                </div>
                <div className='mainForm'>
                    <form className='form' >
                        <div className='input'>
                        <div class="form-group">
                            <label >Recipe Name</label>
                            <p className='error'>{errors.recipe}</p>
                            <input type="text" name='recipe' id='recipe' onChange={inputChange} className="form-control" placeholder="Recipe Name"/>
                        </div>
                        <div class="form-group">
                            <label>Source</label>
                            <p className='error'>{errors.source}</p>
                            <input type="text" name='source' id='source' onChange={inputChange} className="form-control" placeholder="Source"/>
                        </div>
                       
                        <div className = 'ingredientForm'>
                                <div class="form-group">
                                    <label>Ingredients</label>
                                    <input type="text" name='ingredients' id='ingredients' className="form-control" onChange={inputChange} placeholder="Ingredients"/>
                                </div>
                                <div class="form-group option">
                                <div class="form-group">
                                    <label>Quantity</label>
                                    <input type="text" name='quantity' id='quantity' className="form-control" onChange={inputChange} placeholder="Quantity"/>
                                    <select name='metric' id='metric'>
                                        <option value='grams' onChange={inputChange}>Grams</option>
                                        <option value='milliliter'onChange={inputChange}>Milliliter</option>
                                        <option value='unit' onChange={inputChange}>Unit</option>
                                    </select>
                                </div>
                                </div>
                            <div class="form-group  category">
                            <label>Category </label>
                                <select id='category'>
                                    <option value='entree' onChange={inputChange}>Entree</option>
                                    <option value='Main'onChange={inputChange}>Main</option>
                                    <option value='Dessert' onChange={inputChange}>Dessert</option>
                                </select>
                                <p className='error'>{errors.category}</p>
                                <div className={(submitComplete===true)? "displaySuccess":"hideSuccess"}>
                            Success! Your Recipe is Online.
                        </div>
                            </div>
                        </div>
                        </div>
                        <div className='instruction'>
                        <div class="form-group">
                            <label>Ingredients</label>
                            <p className='error'>{errors.instruction}</p>
                            <textarea type="text" name='ingredients' id='ingredients' onChange={inputChange} className="form-control" placeholder="ingredients"/>
                        </div>
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
                        <button type="submit" disabled={(submitComplete===true) ? true:buttonDisable} className="btn submitBtn">Add Recipe</button>
                        </div>
                    </form>
                    
                    
                </div>
                <Footer/>
            </div>  
            </div>
            
            
            )
    }
    
    export default ItemAdd