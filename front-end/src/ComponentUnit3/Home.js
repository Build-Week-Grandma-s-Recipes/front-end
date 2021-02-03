import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import { useHistory } from 'react-router-dom'
import './css/home.css'
import axiosWithAuth from './AxiosWithAuth'


function  Home(){
    
const [items, setItems]= useState([])
const history = useHistory()

    useEffect(()=>{
        axiosWithAuth()
        .get("https://node-buildwk-cookbook.herokuapp.com/api/recipes")
        .then((res)=>{
            console.log("item",res.data)
            setItems(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


        function routeToItem(ev, item) {
          ev.preventDefault();
          history.push(`/recipe/${item.id}`);
        } 
        return(

            <div className='itemBody'>
                
                <div className='homeBody itmBckg'>
                <div className='bar'>
                <Header />
                </div>
                <div className='itemList'>
                    {items.map(item=>{
                    return <div 
                                onClick={ev => routeToItem(ev,item)}
                                className='recipeList' 
                                key={item.id}>                        
                            <h1>{item.recipe}</h1>
                            </div>
                            
                    })}
                </div>           
                </div>  

                <Footer/>
            </div>
            

        
            )
    }

    

    export default Home