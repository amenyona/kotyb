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
          <Article imgUrl={avatar1} date="Mars 10, 2023" title="Enseignant: M. LATE Amenyona Enyo"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={avatar2} date="Mars 10, 2023" title="Les élèves de la quatrième II"/>
        <Article imgUrl={avatar3} date="Mars 10, 2023" title="Les élèves de la cinquième I"/>
        <Article imgUrl={avatar4} date="Mars 10, 2023" title="Les élèves de la quatrième I"/>
        <Article imgUrl={avatar5} date="Mars 10, 20232" title="Les élèves de la sixième"/>
        </div>
      </div>
    </div>
  )
}

export default Blog