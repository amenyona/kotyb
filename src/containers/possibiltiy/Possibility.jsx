import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibilityImage.png'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding'  id='temoignage'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
        <h1 className='gradient__text'>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h1>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth?</p>
        <h4>1914 translation by H. Rackham</h4>
      </div>
    </div>
  )
}

export default Possibility