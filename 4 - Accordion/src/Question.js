import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
const [showInfo, setShowInfo] = useState(false); ///Variable d'état qui va maj le paragraphe
  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={ ()=> setShowInfo (!showInfo)}>
        {showInfo? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
    </header>
    {showInfo && <p>{info}</p>} 
  </article>;
};

export default Question;
///ligne 9 : A chaque click la variable d'état va se modifier et maj les infos + le bouton
///ligne 11 : Si la variable d'état "showInfo" est "true" alors montrer le paragraphe
