import React from 'react';
import './header.css';
import people from '../../assets/people.jpg';
import student from '../../assets/LOGOKOTYB.jpg';

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gtp3__header-content'>
        <h1 className='gradient__text'>Le mot du Directeur: YAMEOGO MAGLOIRE</h1>
        <p>Le Lycée Privé Moderne KOTYB est un établissement d'enseignement secondaire général fondé par des enseignants professionnels.Dirigé par une équipe pédagodigue compétente et expérimentée, KOTYB fait de la discipline le socle, le pilier de la réussite scolaire. Le Lycée Privé Moderne KOTYB offre des frais de scolarité compétitifs avec des effectifs raisonnables. </p>
        <div className='gtp3__header-content__input'>
          {/* <input type="email" placeholder='Your Email Adress' />
          <button type='button'>Get Started</button> */}
        </div>

        <div className='gpt3__header-content__people'>
          {/* <img src={people} alt="people" /> */}
          <p>Le Lycée Privé Moderne KOTYB est une école de référence qui, par sa rigueur, fait notre choix. </p>
        </div>


      </div>
      <div className='gpt3__header-image'>
        <img src={student} alt='etudiante' />
      </div>
    </div>
  )
}

export default Header