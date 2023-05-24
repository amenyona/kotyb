import React from 'react';
import './footer.css';
import logo from '../../assets/LOGOKOTYB.jpg';

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Voulez-vous que vos enfants entrent dans le futur avant les autres? <br/>Choisissez alors le Lycée Privé Moderne KOTYB.</h1>
      </div>
      {/* <div className='gpt3__footer-btn'>
        <p>Request Early Acces</p>
      </div> */}
      <div className='gpt3__footer-links'>
        <div className='gtp3__footer-links_logo'>
          <img src={logo} alt="logo" />
          <p>Discipline - Savoir - Réussite</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Liens</h4>
          <p><a href='#accueil'>Accueil</a></p>
          <p><a href='#apropos'>Apropos</a></p>
          <p><a href='#temoignage'>Témoignage</a></p>
          <p><a href='#classes'>Les classes</a></p>
          <p><a href='#remise-diplôme'>Les Lauréats</a></p>
          <p><a href='#genies'>Les Génies</a></p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Nous Contacter</h4>
          <p>Emplacement : Ouagadougou, Nagrin à 100 mètres du CSPS de Nagrin.</p>
          <p>Tel : 67121285</p>
          <p>Tel : 70941708</p>
          <p>Tel : 78053433</p>
          <p>Email : yamgloire@gmail.com</p>
        </div>
        {/* <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div> */}
      </div>
      <a href="https://wa.me/22660121285" class="whatsapp_float" target="_blank" rel="noreferrer"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
      <div className='gpt3__footer-copyrigth'><p>2023 Amenyona Enyo LATE All rigths reserved.</p></div>
    </div>
  )
}

export default Footer