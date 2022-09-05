import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState(''); ///Variable qui set les couleurs initalisée à un string vide (nom de la couleur)
  const [error, setError] = useState(false); ///Variable qui set les erreurs initialisée à un booléen "false"
  const [list, setList] = useState([]); ///Variable qui set la liste des couleurs initialisée à un tableau vide
  
  const handleSubmit = (e)=> {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors); ///Va setter la liste des couleurs avec le tableau des couleurs de "colors"
      console.log("Couleurs::: " , colors);
    } catch (error) {
      setError(true);
      console.log("Errors::: " , error);
    };
  }; ///Va d'abord générer une liste de couleurs sinon cela enclenchera les erreurs

  return (
  <>
  <section className ="container">
    <h3>Color Generator</h3>
    <form onSubmit={handleSubmit}>
      <input 
      type ="text" 
      value ={color} 
      onChange ={ (e)=> setColor(e.target.value) } 
      placeholder ="#ff7675"
      className ={ `${error?"error" : null}` }
      />
      <button className ="btn" type ="submit">
        Submit
      </button>
    </form>
  </section>
  <section className ="colors">
    <h4>List goes here</h4>
  </section>
  </>
  )
}

export default App
