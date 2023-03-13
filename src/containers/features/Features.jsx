import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Classe de Terminale',
    text: 'Le Lycée Privé Moderne KOTYB dispose de deux classes de terminale.IL y a la classe de terminale A et celle de D.'
  },
  {
    title: 'Classe de Première',
    text: 'Il y a deux classes de première : la première A et la seconde D.'
  },
  {
    title: 'Classe de Seconde',
    text: 'Il y a deux classes de seconde : la seconde A et la seconde D.'
  },
  {
    title: 'Classe de Troisème',
    text: 'Le Lycée Privé Moderne KOTYB dispose de quatre classes de troisième.'
  },
  {
    title: 'Classe de Quatrième',
    text: 'Le Lycée Privé Moderne KOTYB dispose de deux classes de quatrième.'
  },
  {
    title: 'Classe de Cinquième',
    text: 'Le Lycée Privé Moderne KOTYB dispose de deux classes de cinquième.'
  },
  {
    title: 'Classe de Sixième',
    text: 'Il y a trois classes de sixième.'
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