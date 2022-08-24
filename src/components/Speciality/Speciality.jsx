import React from 'react'

import './Speciality.scss'

export const Speciality = ({ title }) => {
    return(
            <div id="spec" className='speciality'>
            <h1  >Speciality</h1>
            <div className='sample'>
                <div className="one_block">
                    <h2>Front-end developer</h2>
                    <p>My favorite pastime is  frontend development. I make a website of any complexity for you and adapt it. I write clear code that is easy to with in the future.</p>
                </div>
                <div className="two_block">
                    <h2>Web design</h2>
                    <p>My favorite pastime is  frontend development. I make a website of any complexity for you and adapt it. I write clear code that is easy to with in the future.</p>
                </div>
               
            </div>
            <div className="line"></div>
            { title }
            </div>
    )
}