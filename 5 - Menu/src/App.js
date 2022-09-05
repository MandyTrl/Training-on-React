import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, SetMenuItems] = useState(items); ///Variable d'état qui va setter les données du fichier "data.js"
  const categories = useState([]); ///Variable d'état qui va setter le composant "Catégories" initialisée à un tableau vide
  
  const filterItems = (category) => {
    if(category === "all"){
      SetMenuItems(items);
      return;
    }
    const newItems = items.filter( (item) =>
    item.category === category)
    SetMenuItems(newItems);
  } ///Filtre les plats en fonction de la catégorie sélectionnée

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"/>
        <Categories filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </div>
    </section>
  </main>;
}

export default App;
