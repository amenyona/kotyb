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
        <p>Le Lycée Privé Moderne KOTYB est une référence en discipline, en travail et en rigueur.Cette école se démarque beaucoup des autres par le programme de nos cours qui est différent des programmes de certains de nos amis d'autres écoles.
        Le Lycée Privé Moderne KOTYB est synonyme de la réussite sinon égale.Nous avons un corps professoral attentif et soucieux pour nous élèves.
        </p>
        <h4>Le Lycée Privé Moderne KOTYB, notre assurance pour la réussite!!!</h4>
      </div>
    </div>
  )
}

export default Possibility