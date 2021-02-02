// import React from 'react'
// import {connect} from 'react-redux'


// const Card = (props) => {
//     console.log(props)
//     if(props.name===''){
//         return(
//             <h1>Welcome</h1>
//         )
//     }else{
//     return(
//         <div className='card'>
//             <div className='text'>
//                 <p>Recipe: {props.recipe}</p>
//                 <p>Category: {props.Category}</p>
                
//             </div>
//         </div>

//     )
//     }
// }
// const mapStateToProps = state =>{
  
//     return state
// }

// export default connect(mapStateToProps, {})(Card)

import React from 'react'
import {connect} from 'react-redux'

const Card = (props) => {
    console.log(props)
    if(props.name===''){
        return(
            <h1>Welcome</h1>
        )
    }else{
    return(
        <div className='card'>
            <div className='text'>
                <p>Name: {props.name}</p>
                <p>Height: {props.height}</p>
            </div>
        </div>

    )
    }
}
const mapStateToProps = state =>{
  
    return state
}

export default connect(mapStateToProps, {})(Card)