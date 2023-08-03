import React from 'react';
import './header.css'
import people from '../../assets/Group 81.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return(
    <div className='gpt3__header section__padding' id = 'home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='You Email Address' name="" id="" />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <p>1,600 people requested access a visit in last 24 hours</p>
          <img src={people} alt="" />
        </div>
      </div>
        <div className='gpt3_header-image'>
          <img src={ai} alt="" />
        </div>
    </div>
    )
};

export default Header