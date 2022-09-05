import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data'; ///Import des données via le fichier "data.js"

function App() {
  
  const people = useState(data); ///Variable d'état permettant de setter les revues initialisée avec les données (déjà sous forme de tableau) de la variable "data"
  const [index, setIndex] = useState(0); ///Variable d'état permettant de modifier l'index initialisée à "0"
  
  useEffect( ()=>{
    const lastIndex = people.length -1;
    if (index < 0){
      setIndex(lastIndex);
    };
    if (index > lastIndex){
      setIndex(0);
    }
  },[index, people]);

  useEffect( ()=> {
    let slider = setInterval( ()=>{
      setIndex(index +1);
    }, 3000);
      return ()=> {
        clearInterval(slider)
      }
  }, [index]);

  return <section className ="section">
      <div className ="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className ="section-center">
        {people.map( (person, personIndex)=> {
          const {id, image, name, title, quote} = person;
          let position = "nextSlide"; ///Variable qui va permettre de maj l'effet de transition des revues

          if ( personIndex === index ){
            position = "activeSlide"
          };
          if ( personIndex === index -1 || (index === 0 && personIndex === people.length -1) ){
            position = "lastSlide"
          };

          return <article key ={id} className ={position}>
            <img src ={image} alt ={name} className ="person-img" />
            <h4>{name}</h4>
            <p className ="title">{title}</p>
            <p className ="text">{quote}</p>
            <FaQuoteRight className ="icon" />
          </article>
        }
         )}

         <button className ="prev" onClick ={ ()=> setIndex(index -1)}> 
          <FiChevronLeft />
         </button>
         <button className ="next" onClick ={ ()=> setIndex(index +1)}>
          <FiChevronRight />
         </button>

      </div>
    </section>;
}

export default App;
