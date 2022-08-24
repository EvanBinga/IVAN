import React from 'react'
import './Contact.scss'

export const Contact = ({ title }) => {
    return (
        <div id='cont'className='Contacts'>
            <div className="contact">
             <h3 className='w'>Contact With Me</h3>
             <div className="inp">
                 <input className='Name' type='text' placeholder="Name"></input>
                 <input className='Phone' type='text' placeholder="Number"></input>
                 <input className='Massage' type='text' placeholder="Massage"></input>
             </div>
                <div className="body">
                    <p className='lets'>Lets Work!</p>
                    <p className='work'>I am always ready to consider your proposal. You just need to write to me. If you are not comfortable doing this through a website, then here are the networks that can help you.</p>
                </div>
                <a href='#' className='send'>Send</a>
            </div>
            <div className="icons1">
                <a href='https://t.me/Aksenenkko' target="_blank"> <img className='telega' src="/images/telega.png"></img></a>
                <a href='https://www.instagram.com/bingalobungalo/' target="_blank"> <img className='insta' src="/images/insta.png"></img></a>
                <a href='https://www.behance.net/5862a2b2' target="_blank"> <img className='beh' src="/images/beh.png"></img></a>
                <a href='https://github.com/EvanBinga' target="_blank"> <img className='git' src="/images/git.png"></img></a>
                </div>
            { title }
        </div>
    )
}