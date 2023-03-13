import React from 'react';
import './brand.css';
import { slack, github, dropbox, mail_chimp, dribbble } from './import';

function Brand() {
  return (
    <div className='gpt3_brand section__padding'>
      <div>
        <img src={slack} alt="slack" />
        </div>
        <div>
          <img src={github} alt="github" />
        </div>
        <div>
          <img src={dropbox} alt="dropbox" />
        </div>
        <div>
          <img src={mail_chimp} alt="mail_chimp" />
        </div>
        <div>
          <img src={dribbble} alt="dribbble" />
        </div>            
    </div>
  )
}

export default Brand