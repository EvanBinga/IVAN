import './App.css';
import { Body } from './components/Body'
import { Speciality } from './components/Speciality'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import Menu from './components/Menu/Menu';
import { useState } from 'react';


function App() {
  const [menuActive, setMenuActive] = useState(false)

  const items = [{value:"Telegram", href: 'https://t.me/Aksenenkko',},{value:"Instagram", href: 'https: www.instagram.com/bingalobungalo'},{value:"Behance", href: 'https://www.behance.net/5862a2b2'},{value:"GitHub", href: 'https://github.com/EvanBinga'},{value:"Behance", href: 'https://www.behance.net/5862a2b2'}]
 
  return (
      
    <div className="App">
        <nav>
        <img className='logo' src="/images/logo2.png"></img>
          <div className='Burger' onClick={()=> setMenuActive(!menuActive)}>
  
            <span/>
          </div>
        </nav>
        <div className='Header'>
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

            </div>
        <main>
          
          <Body title={''}/>
          <Speciality title={''}/>
          <About title={''}/>
          <Skills title={''}/>
          <Contact title={''}/>
          <Menu active = {menuActive} setActive={setMenuActive} header={"My contacts"} items={items}/>
          </main>
    </div>
  );
}

export default App;

