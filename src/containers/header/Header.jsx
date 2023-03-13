import React from 'react';
import './header.css';
import people from '../../assets/people.jpg';
import student from '../../assets/LOGOKOTYB.jpg';

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gtp3__header-content'>
        <h1 className='gradient__text'>Les mots du Directeur: YAMEOGO MAGLOIRE</h1>
        <p>Kotyb est un établissement d'enseignement fondé par des enseignants professionnels.Elle est dirigée par une équipe pédagodigue compétente,motivée et trempée par plusieurs années d'enseignement.Elle fait de la discipline un pilier de la réussite scolaire. Elle offre des frais de scolarité comptétitifs avec des effectifs scolaires. Elle a un partenaiat sérieux avec les parents d'élèves. </p>
        <div className='gtp3__header-content__input'>
          {/* <input type="email" placeholder='Your Email Adress' />
          <button type='button'>Get Started</button> */}
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>Kotyb, sa rigueure fait notre choix.</p>
        </div>


      </div>
      <div className='gpt3__header-image'>
        <img src={student} alt='etudiante' />
      </div>
    </div>
  )
}

export default Header