import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title ='';

const showBackground = true;

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
)

const images = [];
for (let animal in animals){
  images.push(<img key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" onClick={displayFact}/>)
}

const animalFacts = (
  <div>
<h1>
 { title === '' ? 'Click an animal for a fun fact' : title }
</h1> 
{showBackground && background }
<p id='fact'></p>
</div>
);

function displayFact(e) {
  const randomNum = Math.floor(Math.random() * animals[e.target.alt].facts.length);
  document.getElementById("fact").innerHTML = animals[e.target.alt].facts[randomNum];
}
const changes = (
  <div>
    {animalFacts}
    {showBackground && background}
    <div className="animals">{images}</div>
  </div>
)

ReactDOM.render(animalFacts, document.getElementById("root"));

