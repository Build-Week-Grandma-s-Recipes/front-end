import React from 'react'
import {Link} from 'react-router-dom'
import './css/HeaderFoot.css'
// import './cssPage/Footer.css'


function Footer(){

    function clearLocal(){
        localStorage.clear()
    }
    return(
        <div className="footerDiv">
            <div>
                <p>Grand Ma Recipe LLC</p>
                <Link to='/' onClick={clearLocal} className="logOutLink">Log Out</Link>
                <p>© 2021 Track Team 11</p>
            </div>
        </div>
    )


}

export default Footer