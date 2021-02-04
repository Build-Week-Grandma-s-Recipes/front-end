
import React, {useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import'./css/Recipe.css'

import axiosWithAuth from './AxiosWithAuth'

const Edit = (props) => {

    const emptyItem = {
        recipe_name: '',
        source_name: '',
        category_id:1
    };  
 
    let emptyInstru = {
        step_number:1,
        instruction_text:''
    }
        
    const emptyIngre ={
        quantity:1,
        quantity_units:'',
        ingredient_name: ''
    }
 
    const [form, setForm] = useState(emptyItem);
    const [instruForm, setInstruForm] = useState(emptyInstru);
    const [ingreform, setIngreForm] = useState(emptyIngre);
  
    const iDrecipe = props.match.params.id
   
    // useEffect(()=>{
    //     axiosWithAuth()
    //     .get('https://node-buildwk-cookbook.herokuapp.com/api/recipes')
    //     .then(res =>{
    //         console.log(res)
    //        let i =  res.data.filter(x=> iDrecipe.includes(x.id) )
    //     //    console.log(iDrecipe)
    //     //    console.log(i[0])   
    //        setItem(i[0]) 
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])
    const inputChange = (e) => {
        e.persist();
        setForm({...form,[e.target.name]:e.target.value});
        
        console.log(form)
        
};
    
    const inChange = e =>{
        e.persist()
        setIngreForm({...ingreform , [e.target.name]:e.target.value})
        // final.ingredients[0] = {...itm}
        console.log(ingreform)
    }
    const inTChange =e =>{
        e.persist()
        setInstruForm({...instruForm,[e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    })
        
        
        console.log(instruForm)
    }
    const formIngreSubmit = (e) => {
            console.log(form)
            axiosWithAuth()
                .post(`/api/ingredients/${iDrecipe}/`,
                ingreform,
                {headers:{authorization:localStorage.getItem('token')}
            })
                .then(resp=>{
                    console.log(resp)
                    setForm(emptyInstru)
                })
                .catch(err=>{
                    console.log(err)
                })
            
    };
        const formInstruSubmit = (e) => {
            console.log(form)
            axiosWithAuth()
                .post(`/api/instructions/${iDrecipe}`,
                instruForm,
                {headers:{authorization:localStorage.getItem('token')}
            })
                .then(resp=>{
                    console.log(resp)
                    setForm(emptyItem)
                })
                .catch(err=>{
                    console.log(err)
                })
            
     };
        const formSubmit = (e) => {
            console.log(form)
            axiosWithAuth()
                .put(`/api/recipes/${iDrecipe}`,
                form,
                {headers:{authorization:localStorage.getItem('token')}
            })
                .then(resp=>{
                    console.log(resp)
                    setForm(emptyItem)
                })
                .catch(err=>{
                    console.log(err)
                })
            
     };
     function instrusub(){
        formInstruSubmit()
     }
        function mainformSubmit(){
            instrusub()
            formIngreSubmit()
            formSubmit()
        }
  
    return(

            <div className='itemBody'>
                <div className='homeBody'>
                <Header/>
                <div className='bar'>
                </div>
                <div className='mainForm'>
                    <form className='form'>
                        <div class="form-group">
                            <label >Recipe Name</label>
                            <input type="text" name='recipe_name' id='recipe_name' onChange={inputChange} className="form-control" placeholder="Recipe Name"/>
                        </div>
                        <div class="form-group">
                            <label>Step number</label>
                            <input type="number" name='step_number' id='step_number' onChange={inTChange} className="form-control" placeholder="Source"/>
                        </div>
                        <div class="form-group">
                            <label>Ingredients</label>
                             <textarea type="text" name='ingredient_name' id='ingredient_name' onChange={inChange} className="form-control" placeholder="Ingredient"/>
                        </div>
                        <div class="form-group">
                            <label>Instruction</label>
                             <textarea type="text" name='instruction_text' id='instruction_text' onChange={inTChange} className="form-control" placeholder="Instruction"/>
                        </div>
                        <div>
                        <button onClick={formIngreSubmit} className="btn submitBtn">Add Ingredient</button>
                        <button onClick={instrusub} className="btn submitBtn">Add instruction</button>
                        <button onClick={mainformSubmit}  className="btn submitBtn">Update Recipe</button>
                        </div>
                    </form>
                    
                    
                </div>
                <Footer/>
            </div>  
            </div>
            
            
            )
    }
    
export default Edit