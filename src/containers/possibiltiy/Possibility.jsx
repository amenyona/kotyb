import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/delegueeuipe.jpeg'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding'  id='temoignage'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h1 className='gradient__text'>Les mots des représentants des élèves</h1>
        <p>Nous les élèves du Lycée Privé Moderne KOTYB avons confiance en notre école vis-à-vis du fait que nous avons la garantie de préparer avec soin notre réussite scolaire et universitaire, de part la qualité de sa discipline, de sa rigueur, et de ses programmes de cours exceptionnels qu'il nous inculque.
        </p>
        <h4>Le Lycée Privé Moderne KOTYB, notre assurance pour la réussite!!!</h4>
      </div>
    </div>
  )
}

export default Possibility