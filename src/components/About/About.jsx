import React from 'react'

import './About.scss'

export const About = ({ title }) => {
    return(
        <div id='me'className='fixed-conteiner'>
           <div className="conteiner">
               <div className="cont">
                <div className="about">
                    <h2 className='h'>About Me</h2>
                    <p className='p2'>
                    Hey! My name is Ivan and i am front-end developer and web designer. i graduated from such courses as: Skillbox - in front-end developer and web deisign. At the moment I am studying and diving deeper into web development. I believe that the most important thing in life is to find yourself and what you like. I am very glad that i have chosen this path. This motivates me and so I move on. Patience and a lot of effort.
                    </p>
                    <div className="IvanMir">
                   
                   </div>
                    <p className='p3'>Workin with me - you will receive quality work from me. I give my best and understand the client /employer well. I also learn and adapt quickly!</p>
                </div>
                
               </div>
               <img className='photo' src="/images/photo.jpeg"></img>
               <div className="block">
                <div className="border">
                <p className='p6'>Ivan Mirzoahmedov<br></br><p  className='p5'>Frontend Developer</p></p>
                   </div>
                   <div className="skill">
                        <p className='lang'><pre>    HTML&CSS       JavaScript        ReactJS</pre></p>

                   </div>
               </div>
               <div className="Block">
               <p className='pp2'>
                    Hey! My name is Ivan and i am front-end developer and web designer. i graduated from such courses as: Skillbox - in front-end developer and web deisign. At the moment I am studying and diving deeper into web development. I believe that the most important thing in life is to find yourself and what you like. I am very glad that i have chosen this path. This motivates me and so I move on. Patience and a lot of effort.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur corporis facere beatae veniam quia, nobis fuga cumque. Omnis totam ea mollitia modi minima, eius praesentium iure distinctio tenetur magnam! 
                </p>

                    <p className='fron'>FRONT-END DEVELOPER</p>
                    <p className='uxui'>UX/UI DESIGNER</p>
                    <img className='icons2' src="/images/icons.png"></img>

                    

               </div>
               <p className='h11'>
                        What 
                        can
                        I Offer
                        You
                </p>
                <a href='#cont' className='button'>Contact With Me</a>
                </div>
           
            { title }
        </div>
    )
}