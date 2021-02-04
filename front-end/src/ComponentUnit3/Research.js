import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'

import {useHistory} from 'react-router-dom'
import './css/Research.css'
import axiosWithAuth  from './AxiosWithAuth'

   
    
 const Recipe = e => {
    const[RecipeName, setRecipeName] = useState('')
    const [recipeFind,setRecipeFind] = useState([])
    const onChange = e =>{
        e.persist();
        setRecipeName({...RecipeName,[e.target.name]:e.target.value});
    }
    const history = useHistory()
    const onClick = e =>{
            axiosWithAuth()
            .get('https://node-buildwk-cookbook.herokuapp.com/api/recipes')
            .then(res =>{
              let i =  res.data.filter(e => RecipeName.recipe.includes(e.recipe))
                console.log(res)
                // console.log(RecipeName)
                // console.log(i)
                setRecipeFind(i[0])
                // console.log(recipeFind)
            })
            .catch(err=>{
                window.location.href="/research"  
                console.log(err)

            })
           
    }
          function routeToItem(ev, recipeFind) {
              ev.preventDefault();
                history.push(`/recipe/${recipeFind.id}`);
             } 
    
        return(

            <div className='itemBody researchDiv'>
                <div className='homeBody itmBckg'>
                <div className='bar'>
                <Header />
                </div>
                <div className= 'researchBar'>
                    <h1>Research</h1>
                    <div>
                        <input type='text' name='recipe' placeHolder='Recipe Name' onChange={onChange}></input>
                        <button onClick={onClick}>click here</button> 
                    </div>    
                </div>
                <div className='researchCard'>
                 <div 
                        onClick={ev => routeToItem(ev,recipeFind)}
                        className='recipeResearch' 
                        key={recipeFind.id}>                        
                        <h1>{recipeFind.recipe}</h1>
                    </div>
                 </div>    
                </div> 
                <Footer/>
            </div>
            

        
            )
    }

export default Recipe

// import React, {useEffect, useState} from 'react'
// import {connect} from 'react-redux'
// import Card from './RecipeCard'
// import { fetchPokemon } from './action'
// import './css/Research.css'

//  const Research = ({fetchPokemon}) => {
//     useEffect(() => {
//         fetchPokemon();
//       }, [fetchPokemon]);

// const[number, setNumber] = useState('')

//     return(
//         <div className='imgBckg'>
//             <div>
//             <Header />
//                 <div className='researchBar'>
//                     <input type='text' placeholder=' from 1 to 898' onChange={e => setNumber(e.target.value)}></input>
//                     <button onClick={()=>fetchPokemon(number)}>click here</button>  
//                 </div>               
//             </div>
//             <Card />
//             <Footer/>
//         </div>
//     )
// }

// const mapStateToProps = state =>{
//     return state
// }
// const mapDispatchToProps = {fetchPokemon}

// export default connect(mapStateToProps, mapDispatchToProps)(Research)