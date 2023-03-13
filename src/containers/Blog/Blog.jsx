import React from 'react';
import { Article } from '../../components';
import './blog.css';
import { avatar1, avatar2, avatar3, avatar4, avatar5 } from './import';

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='genies'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Les élèves informaticiens et leur enseignant</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={avatar1} date="Sep 26, 2022" title="Enseignant: M. LATE Amenyona Enyo"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={avatar2} date="Sep 26, 2022" title="1914 translation by H. Rackham"/>
        <Article imgUrl={avatar3} date="Sep 26, 2022" title="1914 translation by H. Rackham"/>
        <Article imgUrl={avatar4} date="Sep 26, 2022" title="1914 translation by H. Rackham"/>
        <Article imgUrl={avatar5} date="Sep 26, 2022" title="1914 translation by H. Rackham"/>
        </div>
      </div>
    </div>
  )
}

export default Blog