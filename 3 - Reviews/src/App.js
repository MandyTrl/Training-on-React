import React from 'react';
import Review from './Review';
function App() {
  return <main>
    <section className="container">
      <div className="title">
        <h2>Our Reviews</h2>
        <div className="underline"/>
        <h3 style={{marginTop: 22, marginBottom: -115}} >MARIO KART : Mushroom Cup</h3>
      </div>
      <Review />
    </section>
  </main>
}

export default App;
