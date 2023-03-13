import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/LOGOKOTYB.jpg';
const Menu = () => {
  return (
    <>
      <p><a href='#accueil'>Accueil</a></p>
      <p><a href='#apropos'>Apropos</a></p>
      <p><a href='#temoignage'>Témoignage</a></p>
      <p><a href='#classes'>Les classes</a></p>
      <p><a href='#remise-diplôme'>Les Lauréats</a></p>
      <p><a href='#genies'>Les Génies</a></p>
    </>
  )

}
function Navbar() {
  const [togglemenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gtp3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {togglemenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {togglemenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )

        }

      </div>

    </div>
  )
}

export default Navbar;