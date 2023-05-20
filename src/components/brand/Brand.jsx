import React from 'react';
import './brand.css';
import { xajoblogo, pushlogo } from './import';

function Brand() {
  return (
    <div className='gpt3_brand section__padding'>
     <a href='https://pushtudio.com/'  target="_blank"> 
      <div>
        <img src={xajoblogo} alt="slack" className='taille'/>
        </div>
        </a>
        <a href='https://www.xajob.biz/'  target="_blank">
        <div>
          <img src={pushlogo} alt="dropbox" className='taille'/>
        </div>
        </a>
                 
    </div>
  )
}

export default Brand