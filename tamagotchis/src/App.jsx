import { useState } from "react";
import "./App.css";

const tamagotchiData = [
  {
    name: "Tamagotchi Pix",
    facts: [
      "this was my first ever tamagotchi model!",
      "it's broken down into the traditional pix, and then the pix party",
      "i bought the pix party in the pink & blue!",
    ],
    images: ["./assets/Tamagotchi1.png", "./assets/Tamagotchi2.png"],
  },
  {
    name: "Tamagotchi Uni",
    facts: [
      "I have two! Both from the original wave when the model was first released",
      "I have yet to run the purple one, as my uncle got it for me in Japan",
    ],
    images: ["./assets/Tamagotchi1.png", "./assets/Tamagotchi2.png"],
  },
];

const musicStars = [
  "./assets/Tamagotchi19.png",
  "./assets/Tamagotchi20.png",
  "./assets/Tamagotchi21.png",
  "./assets/Tamagotchi22.png",
  "./assets/Tamagotchi23.png",
  "./assets/Tamagotchi24.png",
]
const connectionV4s = [
  "./assets/Tamagotchi19.png",
  "./assets/Tamagotchi20.png",
  "./assets/Tamagotchi21.png",
  "./assets/Tamagotchi22.png",
  "./assets/Tamagotchi23.png",
  "./assets/Tamagotchi24.png",
]

const familitchi = [
  "./assets/Tamagotchi25.png",
  "./assets/Tamagotchi26.png",
  "./assets/Tamagotchi27.png",
  "./assets/Tamagotchi28.png",
  "./assets/Tamagotchi29.png",
  "./assets/Tamagotchi30.png",
  "./assets/Tamagotchi31.png",
  "./assets/Tamagotchi32.png",
  "./assets/Tamagotchi33.png",
  "./assets/Tamagotchi34.png",
  "./assets/Tamagotchi35.png"

]

function App() {
  return (
    <>
      <h1> Marleigh's Tamagotchi Time ! </h1>
      <h2> Tama Diary! </h2>
      {tamagotchiData.map((tamagotchiModel) => (
        <div key={tamagotchiModel.name}>
          <h3>{tamagotchiModel.name}</h3>
          <ul>
            {tamagotchiModel.facts.map((f) => (
              <li>{f}</li>
            ))}
          </ul>
          <div>
            {tamagotchiModel.images.map((i) => (
              <img src={i}></img>
            ))}
          </div>
        </div>
      ))}
      <h2> My Tamagotchi ISOs </h2>
      <h3> Connection Models </h3>
      <h2> Connection V6: Music Stars! </h2>
      <div>
            {musicStars.map((i) => (
              <img src={i}></img>
            ))}
          </div>
      <h2> Connection V5: The Familitchi Models</h2>
      <div>
            {familitchi.map((i) => (
              <img src={i}></img>
            ))}
          </div>
    </>
  );
}

export default App;
