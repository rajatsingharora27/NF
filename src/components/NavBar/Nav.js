import React, { useEffect, useState } from 'react';
// import logo4 from '../../images/logo4.png';
import avatar from '../../images/avatar.png'
import './Nav.css'


const Nav = () => {

    const [show,handleShow]=useState(false);

    const transitionNavBar =()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }  
    
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener('scroll',transitionNavBar)
    },[]);




    return (
        <div className={`nav ${show && 'nav_black'}`}>

            <div className='nav_content'>
                <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix-Logo" />
                <img className='nav_avatar' src={avatar} alt="Avatar" />
            </div>
        </div>
    )
}

export default Nav