import React, { useState } from "react";
import "./PokemonCard.scss";
import PokemonPage from "../PokemonPage/PokemonPage";
import Button from "../Button/Button";

function PokemonCard({ pokemon }) {
  const [toggleModal, setToggleModal] = useState(false);
  const invertToggle = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className="pokemonCard__wrapper">
      <div className="pokemonCard__container">
        <div className="pokemonCard__image">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <h2 className="pokemonCard__name">{pokemon.name}</h2>
        <Button name="SHOW MORE" onClickHandler={invertToggle} />
      </div>
      {toggleModal ? (
        <PokemonPage pokemon={pokemon} onClickHandler={invertToggle} />
      ) : null}
    </div>
  );
}

export default PokemonCard;
