import React, { useState } from 'react';
import data from './data'; ///Import du texte générique

function App() {
    
  const [count, setCount] = useState(0); ///Variable d'état qui permet de setter le nombre de paragraphe, intialisée à 0
  const [text, setText] = useState([]); ///Variable d'état qui set le texte

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count); ///Renvoie un nbre entier au lieu d'un string 

    if(count <= 0){
      amount = 1
    }
    if (count > 8){
      amount = 8
    }

    setText(data.slice(0, amount)); ///Va découper les paragraphes en partant de 0 (du 1er paragrpahe) au nombre de paragraphe sélectionné grace à la variable "amount"
    console.log("nbr de paragraphes::: ",count)
  }; ///Fonction qui va générer le texte

  return (
  <section className ="section-center">
    <h3>🥱 Tired of boring <i>lorem ipsum?</i></h3>
    <form className ="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraphs :
      </label>
      <input type ="number" name ="amount" id ="amount" value ={count} onChange ={ (e)=>setCount(e.target.value) }/>
      <button type ="submit" className = "btn">Generate</button>
    </form>
    <article className ="lorem-text">
      {text.map((item, index) => {
        return <p key ={index}>
          {item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
