import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
width: 100%;
height: auto;

display: flex;
flex-flow: column nowrap;
align-items: center;
form {
    border: 1px solid black;
    width: 600px;
    padding: 25px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
form div{
    width: 250px;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    // border: 1px solid blue;
    input{
        width: 80%;
    }
}
`
const IngredientsDiv = styled.div`
display: flex;
flex-flow: row nowrap !important;
justify-content: space-between;
.quantity{
    width: 20px !important;
}
select{
    width: 200px;
}
`

export default function Recipe() {

// const addNewIngredient = ()=>{
//     const newDiv = document.createElement('div');



    return (
        <StyledDiv>
            <h2>New Recipe</h2>
            <form>
                <div>
                <label>Recipe Name<br/>
                <input 
                type='text'
                name='name'
                placeholder="Tomato Soup..."
                // onChange={onChange}
                // value={values.recipteName}
                />
                </label><br/>

                </div>


                <div>
                <label>Recipe Origin<br/>
                <input 
                type='text'
                name='origin'
                placeholder='Grandma Dorothy...'
                // onChange={onChange}
                // value={values.recipteName}
                />
                </label><br/>
                </div>
                <div style={{width: '100%', textAlign: 'center'}}><h3>Ingredients</h3></div>
                <IngredientsDiv class='ingredientsRoot' style={{width: '100%'}}>

                <input className='quantity' type='text' name='quantity' placeholder='0'/*onChange={onChange} value={values.recipteName}*//>
                    <select name='measure' /*value={values.measure} onChange={onChange}*/>
                        <option value=''>-measurement-</option>
                        <option value='tablespoons'>tablespoons</option>
                        <option value='teaspoons'>teaspoons</option>
                        <option value='ounces'>ounces</option>
                        <option value='cups'>cups</option>
                        <option value='pints'>pints</option>
                        <option value='quarts'>quarts</option>
                        <option value='gallons'>gallons</option>
                    </select>
                    <input id='ingredient' type='text' name='ingredient' placeholder='ingredient'/*onChange={onChange} value={values.recipteName}*//>
                    <button>Add</button>
                </IngredientsDiv>
                
                

            </form>
        </StyledDiv>
    )
}
