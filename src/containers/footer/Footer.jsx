import React from 'react';
import './footer.css';
import logo from '../../assets/LOGOKOTYB.jpg';

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Voulez-vous que vos enfants entrent dans le futur avant les autres, choisissez le Lycée Privé Moderne KOTYB</h1>
      </div>
      {/* <div className='gpt3__footer-btn'>
        <p>Request Early Acces</p>
      </div> */}
      <div className='gpt3__footer-links'>
        <div className='gtp3__footer-links_logo'>
          <img src={logo} alt="logo"/>
          <p>The standard Lorem Ipsum passage, used since the 1500s</p>
        </div>  
        <div className='gpt3__footer-links_div'>
          <h4>inks</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>   
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>  
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Crechtewoord K12 182 DK Alknjcb</p>
          <p>085-132567</p>
          <p>amenyona@late.com</p>
        </div>    
      </div>
      <div className='gpt3__footer-copyrigth'><p>2023 Amenyona Enyo LATE All rigths reserved.</p></div>
    </div>
  )
}

export default Footer