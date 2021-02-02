// import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
// import {connect} from 'react-redux'
// import {fetchRecipe} from '../action'
// import Card from './RecipeCard'
// // import { axiosWithAuth } from './AxiosWithAuth'

   
    
//  const Recipe = ({fetchRecipe}) => {
//         useEffect(() => {
//             fetchRecipe();
//           }, [fetchRecipe]);
//           const[RecipeName, setRecipeName] = useState('')

//         return(

//             <div className='itemBody'>
//                 <div className='homeBody itmBckg'>
//                 <div className='bar'>
//                 <Header />
//                 </div>
//                 <div className= 'research'>
//                     <h1>Research</h1>
//                     <div>
//                         <input type='text' placeHolder='Recipe Name' onChange={e => setRecipeName(e.target.value)}></input>
//                         <button onClick={()=>fetchRecipe(RecipeName)}>click here</button>  
//                     </div>    
//                 </div>  
//                 <Card/>    
//                 </div> 
//                 <Footer/>
//             </div>
            

        
//             )
//     }
// const mapStateToProps = state =>{
//     return state
// }
// const mapDispatchToProps = {fetchRecipe}

// export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Card from './RecipeCard'
import { fetchPokemon } from './action'
import './css/Research.css'

 const Research = ({fetchPokemon}) => {
    useEffect(() => {
        fetchPokemon();
      }, [fetchPokemon]);

const[number, setNumber] = useState('')

    return(
        <div className='imgBckg'>
            <div>
            <Header />
                <div className='researchBar'>
                    <input type='text' placeholder=' from 1 to 898' onChange={e => setNumber(e.target.value)}></input>
                    <button onClick={()=>fetchPokemon(number)}>click here</button>  
                </div>               
            </div>
            <Card />
            <Footer/>
        </div>
    )
}

const mapStateToProps = state =>{
    return state
}
const mapDispatchToProps = {fetchPokemon}

export default connect(mapStateToProps, mapDispatchToProps)(Research)