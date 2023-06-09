import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Classes de Terminale',
    text: 'Le Lycée Privé Moderne KOTYB dispose de deux classes de terminale: une terminale A et une terminale D.'
  },
  {
    title: 'Classes de Première',
    text: 'Le Lycée Privé Moderne KOTYB dispose de deux classes de première : une première A et une première D.'
  },
  {
    title: 'Classes de Seconde',
    text: 'Le Lycée Privé Moderne KOTYB dispose de deux classes de seconde : une seconde A et une seconde D.'
  },
  {
    title: 'Classes de Troisème',
    text: 'Le Lycée Privé Moderne KOTYB dispose de quatre classes de troisième.'
  },
  {
    title: 'Classes de Quatrième',
    text: 'Le Lycée Privé Moderne KOTYB dispose de deux classes de quatrième.'
  },
  {
    title: 'Classes de Cinquième',
    text: 'Le Lycée Privé Moderne KOTYB dispose de deux classes de cinquième.'
  },
  {
    title: 'Classes de Sixième',
    text: 'Le Lycée Privé Moderne KOTYB dispose de trois classes de sixième.'
  },
]

function Features() {
  return (
    <div className='gpt3__features section__padding' id='classes'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Les différentes classes du Lycée Privé Moderne KOTYB</h1>
        <p>Des classes aérées et électrifiées</p>
      </div>
      <div className='gpt3__features-container'>
       {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title+index} />
       ))}
      </div>
      
    </div>
  )
}

export default Features