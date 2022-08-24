import React from 'react'
import './Header.scss'

export const Header = ({ title }) => {
    let menu = () => {
    
    } 


    return (
        
        <div className='Header'>
            <img className='Logo2' src="/images/logo2.png"></img>
            <img className='Burger' src="/images/burger.png"></img>
                <div className="Menu">
                    <img className='Logo' src="/images/logo.png"></img>
                    <img className='Burger' src="/images/burger.png"></img>
                <div className="navbar">
                    <ul>
                        <li> <a href='#hom'>Home</a></li>
                        <li> <a href='#spec'>Speciality</a></li>
                    </ul>
                </div>
            <div className="navbar_2">
                    <ul>
                        <li> <a href='#me'>About</a></li>
                        <li> <a href='#cont'>Contact</a></li>
                    </ul>
            </div>
                </div>
            {/* <div className="mobileMenu">
                    <a href="#">My Telegram</a>
                    <a href="#">Insatgram</a>
                    <a href="#">Behance</a>
                    <a href="#">GitHub</a>
            </div> */}
                { title }
            </div>
    )
}
