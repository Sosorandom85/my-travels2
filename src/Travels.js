import React from "react";
import Travel from './Travel';
// src/Quotes.js
const quotes = [
  {
    destination: "Orlando Wizarding World - ",
    country: "USA - ",
    image: 
        "https://orlandoinformer.com/wp-content/uploads/photo-gallery/epa/early-park-admission-universal-wizarding-world-of-harry-potter-712-oi.JPG",
    distance: "7 233 km"
  },
  {
    destination: "Disney Florida - ",
    country: "USA - ",
    image:
        "https://secure.cdn1.wdpromedia.com/resize/mwImage/2/1280/720/75/wdpromedia.disney.go.com/media/wdpro-assets/home/hpr/walt-disney-world-six-parks-uk-video-loop.jpg",
    distance: "7 247 km"
  },
  {
    destination:"Monte Cassino - ",
    country: "Italie - ",
    image:
        "https://lonelyplanetwpnews.imgix.net/2018/07/1-20.jpg",
    distance:"1 533,5 km"
  },
  {
    destination:"Londres - ",
    country: "U.K - ",
    image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg",
    distance:"466,5 km"
  },
  {
    destination:"Hobbiton - ",
    country: "Nouvelle Zélande - ",
    image:
        "https://www.hobbitontours.com/media/1162/hobbiton-movie-set-18.jpg?center=0.44162436548223349,0.49833333333333335&mode=crop&width=1272&height=716&rnd=131219724030000000",
    distance:"18 671 km"
  }
];

const Travels = () => (
  <div>
    {quotes.map(quote => (
  <Travel destination={quote.destination} image={quote.image} country={quote.country} distance={quote.distance}/>

    ))}
  </div>
);

export default Travels;
