import React from 'react'
import {Link} from 'react-router-dom'
// import {axiosWithAuth} from "./AxiosWithAuth"


function Header(){

    return(
        <div className='back'>
        <div className='navBar '>
            <div className='mainText'>
                <div className='myName'>
                <h1>Grand Ma Recipe</h1>
                </div>
                
            </div>
            <ul className="navList">
                <li>
                    <Link className='link' to='/home'>
                       Home
                    </Link>
                </li>
                <li>
                    <Link className='link'  to='/research'>                        
                      Research                                  
                    </Link>
                </li>
                

            </ul>
        </div>
        </div>
    )}
export default Header