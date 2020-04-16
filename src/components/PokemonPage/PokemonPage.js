import React, { useState, useEffect } from "react";
import "./PokemonPage.scss";
import Button from "../Button/Button";
import StatusBar from "../StatusBar/StatusBar";

function PokemonPage({ pokemon, onClickHandler }) {
  let sprite = pokemon.sprites;
  const [spritesImage, setSpritesImage] = useState(sprite.front_default);
  let isSwitching = true;
  const switching = () => {
    if (isSwitching) {
      setSpritesImage(sprite.back_default);
      isSwitching = !isSwitching;
    } else {
      isSwitching = !isSwitching;
      setSpritesImage(sprite.front_default);
    }
  };

  useEffect(() => {
    if (onClickHandler) {
      document.body.style.overflowY = "hidden";
    }
  });

  const showScrollbar = () => {
    document.body.style.overflowY = "visible";
  };

  const toggleSroll = () => {
    onClickHandler();
    showScrollbar();
  };

  return (
    <div className={`pokemonPage__container`}>
      <div className="pokemonPage__wrapper">
        <div className="pokemonPage__image">
          <img src={spritesImage} alt={pokemon.name} />
        </div>
        <Button name="rotate" onClickHandler={switching} />
        <h2 className="pokemonPage__name">{pokemon.name}</h2>
        <div className="pokemonPage__info">
          <div>
            <span>Weight:</span> {pokemon.weight} lbs.
          </div>
          <div>Height: {pokemon.height} in.</div>
        </div>
        <h4>Types:</h4>
        <div className="pokemonPage__type-wrapper">
          {pokemon.types.map((type, index) => {
            return (
              <div
                key={index}
                className={`pokemonPage__type ${type.type.name}`}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
        <h4>Abilities:</h4>
        <div className="pokemonPage__ability-wrapper">
          {pokemon.abilities.map((ability, index) => {
            return (
              <div
                className={`pokemonPage__ability ${ability.ability.name}`}
                key={index}
              >
                {ability.ability.name}
              </div>
            );
          })}
        </div>
        <h4>Stats:</h4>
        <div className="pokemonPage__stats-wrapper">
          {pokemon.stats.map((stats, index) => {
            return (
              <div key={index} className="pokemonPage__stats">
                <div className="pokemonPage__stats-text">{stats.stat.name}</div>
                <StatusBar stats={stats} />
                <br />
              </div>
            );
          })}
        </div>
        <Button name="close" onClickHandler={toggleSroll} />
      </div>
    </div>
  );
}

export default PokemonPage;
