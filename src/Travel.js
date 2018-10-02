import React from "react";

const Travel = props => (
    <figure>
    <img src={props.image} alt={props.destination} />
    <figcaption>
        <destination>{props.destination}</destination>
      <country>{props.country}</country>
      <distance>{props.distance}</distance>
    </figcaption>
  </figure>

);

export default Travel;