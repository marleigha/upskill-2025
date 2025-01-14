import { useState } from "react";
import "./App.css";

const tamagotchiData =
[{
  name:"Tamagotchi Pix",
  facts:[
    "this was my first ever tamagotchi model!",
    "it's broken down into the traditional pix, and then the pix party",
    "i bought the pix party in the pink & blue!",
  ],
  images:[
    "./assets/Tamagotchi1.png",
    "./assets/Tamagotchi2.png"
  ]
  
},
{
  name:"Tamagotchi Uni",
  facts:[
    "I have two! Both from the original wave when the model was first released",
    "I have yet to run the purple one, as my uncle got it for me in Japan"
  ],
  images:[
    "./assets/Tamagotchi1.png",
    "./assets/Tamagotchi2.png"
  ]
  
}

]

function App() {
  return (
    <>
      <h2> Marleigh's Tamagotchi Time ! </h2>
      {tamagotchiData.map(tamagotchiModel => <div key={tamagotchiModel.name}>
        <h3>{tamagotchiModel.name}</h3>
        <ul>
          {tamagotchiModel.facts.map(f => <li>{f}</li>)}
        </ul>
          </div>)}

      <div className="card">
            <img src= "./assets/Tamagotchi1.png"></img>
            <img src="./assets/Tamagotchi2.png" ></img>
            <img
              src="./assets/Tamagotchi3.png"
            ></img>
          </div>
    </>
  );
}

export default App;
