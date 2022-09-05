import React, { useState } from 'react';
import people from './data'; ///Import des données via la feuille "data.js"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'; ///Import des icons

const Review = () => {
  const [index, setIndex] = useState(0); ///Variable qui permet de setter l'index
  const {id, name, job, image, text} = people[index]; ///Variable qui permet d'exploiter les datas "people" à partir d'un tableau initialisé à l'index
  
  const checkNumber = (number) => {
    if(number > people.length -1){
      return 0;
    }
    if(number < 0){
      return people.length -1;
    }
    return number;
  } ///Vérification du nbr envoyé en paramètre et sette le nbr pour tjrs retourner un élément du tableau
  const nextPerson= ()=> {
    setIndex( (index)=> {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }
    )
  } ///Fonction qui permet d'ajouter +1 à l'index et de voir la review suivante
  const prevPerson = ()=> {
    setIndex( (index)=> {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    }
    )
  } ///Fonction qui permet d'ajouter -1 à l'index et de voir la review précédente

  const randomComment = ()=> {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index){
      randomNumber = index + 1; ///Si le randomNumber est le même Nbr que l'index alors rajouter +1 au randomNumber
    }
    setIndex(checkNumber(randomNumber));
  } ///Fonction qui permet de générer un nombre aléatoire pour générer un commentaire aléatoire ensuite via un "onClick"

  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">“ {text} ”</p>
      <div className="button-container">
        <button className="prev-btn"onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="random-btn" onClick={randomComment}>
          Random Comment
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

    </article>
  </main>
};

export default Review;
