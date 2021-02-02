// const initialState = {
//     recipe: '',
//     source: '',
//     ingredients: '',
//     quantity:'',
//     metric:'',
//     instruction:'',
//     category:''
// };

// export  const reducer = (state=initialState,action)=>{
//     switch(action.type){
//         case 'FETCH_RECIPE_START':
//             return{
//                 ...state,
//                 isFetching:true
//             }
//         case 'FETCH_RECIPE_SUCCESS':
//             if(action.payload.types[1]){
//                 return{...state,
//                     isFetching:false,
//                     recipe: '',
//                     source: '',
//                     ingredients: '',
//                     quantity:'',
//                     metric:'',
//                     instruction:'',
//                     category:''}
//             }else{
//             return{
//                     ...state,
//                     recipe: '',
//                     source: '',
//                     ingredients: '',
//                     quantity:'',
//                     metric:'',
//                     instruction:'',
//                     category:'',
//                             }}
//         case 'FETCH_RECIPE_FAIL':
//             return{
//                 ...state,
//                 isFetching:false,
//                 error:action.payload
//             }
//     default:
//         return state
//     }
// }

const initialState = {
    name:'',   //forms.name
    height:'', //height
    weight:null, //weight
    pokemonNumber:null, //id
    types: '', //types.type.name
    secondType:'',
    picture: '', //sprits.other.official-artwork.front_default
    isFetching:false,
    error:''
}

export  const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_POKEMON_START':
            return{
                ...state,
                isFetching:true
            }
        case 'FETCH_POKEMON_SUCCESS':
            if(action.payload.types[1]){
                return{...state,
                    isFetching:false,
                    error:'',
                    name:action.payload.forms[0].name,   
                    height:action.payload.height, 
                    weight:action.payload.weight, 
                    pokemonNumber:action.payload.id, 
                    types:action.payload.types[0].type.name, 
                    secondType:action.payload.types[1].type.name,
                    picture:action.payload.sprites.other['official-artwork'].front_default,}
            }else{
            return{
                ...state,
                isFetching:false,
                error:'',
                name:action.payload.forms[0].name,   
                height:action.payload.height, 
                weight:action.payload.weight, 
                pokemonNumber:action.payload.id, 
                types:action.payload.types[0].type.name, 
                secondType:'',
                picture:action.payload.sprites.other.dream_world.front_default,
            }}
        case 'FETCH_POKEMON_FAIL':
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
    default:
        return state
    }
}