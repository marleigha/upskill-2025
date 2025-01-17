import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./index.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const tamagotchiData = [
  {
    name: "Tamagotchi Pix",
    facts: [
      "this was my first ever tamagotchi model!",
      "it's broken down into the traditional pix, and then the pix party",
      "i bought the pix party in the pink & blue!",
      "i got my second pix off of fb marketplace, and it's the pink model"
    ],
    images: ["./assets/pinkPixParty.jpeg", "./assets/tamagotchi-pix-pink.jpeg"],
  },
  {
    name: "Tamagotchi Uni",
    facts: [
      "I have two! Both from the original wave when the model was first released",
      "I have yet to run the purple one, as my uncle got it for me in Japan",
    ],
    images: ["./assets/uniPurple.jpg", "./assets/pinkUni.jpg"],
  },
];

const musicStars = [
  "./assets/Tamagotchi19.png",
  "./assets/Tamagotchi20.png",
  "./assets/Tamagotchi21.png",
  "./assets/Tamagotchi22.png",
  "./assets/Tamagotchi23.png",
  "./assets/Tamagotchi24.png",
];
const connectionV4s = [
  "./assets/Tamagotchi49.png",
  "./assets/Tamagotchi40.png",
  "./assets/Tamagotchi41.png",
  "./assets/Tamagotchi42.png",
  "./assets/Tamagotchi43.png",
  "./assets/Tamagotchi44.png",
  "./assets/Tamagotchi45.png",
  "./assets/Tamagotchi46.png",
  "./assets/Tamagotchi47.png",
  "./assets/Tamagotchi48.png"
];

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
  "./assets/Tamagotchi35.png",
];

const isoData = [
  {header: "Connection V6: Music Stars!",
  subtitle: "raise your own music star",
  notes: ["I currently have one music star that I got on facebook marketplace!"],
  images: musicStars,
  },
  {header: "Connection V5: Familitchi",
    subtitle: "you get to raise a whole family!",
    notes: ["it's the only connection model i don't have... YET!",
            "i will scour facebook marketplace until i find one at a reasonable price!",
            "i also might get lucky with an ebay listing"
    ],
    images: familitchi,
    },
  {header: "Connection V4.5 and V4!",
    subtitle: "version 4.5's have a star antenna!",
    notes: ["I own a v4.5 with a leopard print and red antenna!"],
    images: connectionV4s,
    }
]

function App() {
  return (
    <>
      <div className="parentDiv">
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
        {isoData.map((tamagotchiModel) => (
          <div key={tamagotchiModel.header}>
            <h3>{tamagotchiModel.header}</h3>
            <h4>{tamagotchiModel.subtitle}</h4>
            <ul>
              {tamagotchiModel.notes.map((n) => (
                <li>{n}</li>
              ))}
            </ul>
            <div>
            <Carousel responsive={responsive}>
              {tamagotchiModel.images.map((i) => (
                <img  className="cara" src={i}></img>
              ))}
              </Carousel>
            </div>
          </div>
        ))}

        
      </div>
    </>
  );
}

export default App;
