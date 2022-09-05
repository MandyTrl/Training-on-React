import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa' ///Import des icones
const url = 'https://course-api.com/react-tabs-project' ///Variable qui stocke les datas

function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]); ///Variable d'état qui permet de setter les jobs, initialisée à un tableau vide
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const RAWresponse = await fetch(url);
    const newJobs = await RAWresponse.json();
    setJobs(newJobs);
    setLoading(false);
  } ///Fonction async qui va permettre de setter les jobs (grace aux datas dans l'url) et le loading 

  useEffect( () => {
    fetchJobs();
  },[]) ///Hook d'effet qui va permettre à la fonction "fetchJobs" de s'effectuer à l'inialisation du composant

  if(loading) {
    return <section className="section-loading">
      <h1>..loading</h1>
    </section>
  }

  const {company, dates, duties, title} = jobs[value];

  return <section className="section">
    <div className="title">
      <h2>Expierence</h2>
      <div className="underline"/>
      
      <div className="job-center">
        <div className="btn-container"> 
          {jobs.map( (item, index) => {
            return (
              <button key={item.id} 
              onClick={ ()=> setValue(index) } 
              className={ `job-btn ${index === value && "active-btn"}` }
              >
                {item.company}
              </button> ///Div qui englobe les boutons
              ///Crée un nvx tableau à partir de la fonction map pour créer un tableau de boutons 
              ///Chaque bouton va setter la valeur du job et donc modifier le contenu du composant
            )
          })}
        </div>
        
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map( (duty, index) => {
            return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"/>
              <p>{duty}</p>
            </div> ///crée un nvx tableau à partir de "duties" en ayant comme arguments "index" et "duty". 
            ///Le nvx tableau renvoie une div + icône avec le desc du poste grace à l'index de référence
            );
          } 
          )}
        </article>
        
      </div>
    </div>
  </section>
}

export default App
