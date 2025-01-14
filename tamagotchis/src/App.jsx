import { useState } from "react";
import "./App.css";

const tamagotchiData =
[{
  name:"Tamagotchi Uni",
  facts:[
    "I own two: the original purple and pink",
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
            <img src= {"./assets/Tamagotchi1.png"}></img>
            <img src={"./assets/Tamagotchi2.png"}></img>
            <img
              src="./assets/Tamagotchi3.png"
            ></img>
          </div>
    </>
  );
}

export default App;
