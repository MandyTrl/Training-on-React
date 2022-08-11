import React, { useState, useEffect } from 'react'
import Loading from './Loading' ///Import de la page de chargement 
import Tours from './Tours' ///Import du composant Tours
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project' ///Import des données (tableau d'objets via un lien url)
function App() {
  
  const [loading, setLoading] = useState(true); ///Variable d'état pour le chargement de la page initialisée à "true"
  const [tours, setTours] = useState([]); ///Variable qui va stocker les voyages initialisée à un tableau vide
  
  const fetchTours = async ()=> {
    setLoading(true); ///Set la variable "loading" à "true"
    
    try {
      const response = await fetch(url); ///va récupérer les datas sur le site
      const rawResponse = await response.json(); ///méthode json qui permet d'exploiter les données au format json
      setLoading(false);
      setTours(rawResponse);
      console.log("datas::::",rawResponse);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchTours();
  },[]);

  if (loading){
    return(
      <main>
        <Loading />
      </main>
    )
  } ///Si la variable loading est "true" alors on initialise la page Loading

  return (
    <main>
      <Tours tours={tours}/>
    </main>
  )
}

export default App
