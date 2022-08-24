import React from 'react'
import './Skills.scss'


export const Skills = ({ title }) => {
    return (
        <div className='Skills'>
            <div className="fix-conteiner">
                <h1 className='SKL'>Skills</h1>
                    <div className="conteiner">
                        <div className="one">
                            <p className='text1'>HTML&CSS<br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Enim nemo sequi esse pariatur, distinctio itaque nulla nostrum? Error, ullam laboriosam velit sapiente vel porro praesentium architecto, nisi, amet totam vitae?</p>
                        </div>
                        <div className="two">
                            <p className='js'>ReactJS<br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Enim nemo sequi esse pariatur, distinctio itaque nulla nostrum? Error, ullam laboriosam velit sapiente vel porro praesentium architecto, nisi, amet totam vitae?</p>
                        </div>
                        <div className="tree">
                            <p className='rjs'>JavaScript<br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Enim nemo sequi esse pariatur, distinctio itaque nulla nostrum? Error, ullam laboriosam velit sapiente vel porro praesentium architecto, nisi, amet totam vitae?</p>
                        </div>
                        <img className='icons' src="/images/icons.png"></img>
                        
                    </div>
                    <a href='https://www.behance.net/5862a2b2' target="_blank" className='button1'>DESIGN PORTFOLIO</a>
            </div>
            { title }
        </div>
    )
}