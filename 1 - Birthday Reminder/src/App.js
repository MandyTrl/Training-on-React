import React, { useState } from 'react'; ///Import de la fonction de hook d'état
import data from './data'; ///Import des données
import List from './List'; ///Import du composant List

function App() {

  const [people, setPeople] = useState(data); ///Variable qui va permettre de stocker les anniversaires, elle est initialisée à "data"
  return <main>
    <section className='container'>
      <h3>{people.length} Birthdays today </h3>
      <List people={people}/>
      <button onClick={ ()=> setPeople([]) }> CLEAR  ALL </button>
    </section>
  </main>;
}

export default App;
