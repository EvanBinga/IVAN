import React from 'react'
import './Body.scss'

export const Body = ({ title }) => {
    return(
        <div id='hom' className='fixed_conteiner'>
            <div className="container">
            <img className='ivan' src="/images/ivan.png"></img>
            <h1 className='front'>FRONTEND DEVELOPER</h1>
            <p className='ivantext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident similique qui eveniet quae id reiciendis, quas sapiente optio cumque neque reprehenderit odio ratione ad consectetur laborum molestias adipisci aspernatur possimus. Suscipit!</p>
            { title }
            </div>
        </div>
    )
}