import React, { useState, useEffect } from "react";
import "./Wrapper.scss";
import Spinner from "../Spinner/Spinner";
import PokemonCard from "../PokemonCard/PokemonCard";
import Button from "../Button/Button";
import { catchAllPokemons, catchPokemon } from "../../services/pokemon";

function Wrapper() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("");
  const [apiLimit] = useState(21);
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${apiLimit}`;

  useEffect(() => {
    fetchUrl(apiUrl);
  }, []);

  const fetchUrl = async url => {
    if (!url) {
      return;
    }
    setLoading(true);
    let data = await catchAllPokemons(url);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async data => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonElement = await catchPokemon(pokemon.url);
        return pokemonElement;
      })
    );
    setPokemonData(_pokemonData);
  };

  const onFilterChange = event => {
    let inputData = event.target.value;
    setFilterValue(inputData);
    console.log(filterValue);
  };

  let filteredPokemon = pokemonData.filter(item => {
    let searchedPokemon = item.name
      .toUpperCase()
      .search(filterValue.toUpperCase());
    return searchedPokemon !== -1;
  });

  const fetchPrev = () => {
    fetchUrl(prevUrl);
  };

  const fetchNext = () => {
    fetchUrl(nextUrl);
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="wrapper__container">
          <div className="wrapper__btn">
            {prevUrl && (
              <Button
                name="prev"
                onClickHandler={fetchPrev}
                isDisabled={!prevUrl}
              />
            )}
            {nextUrl && (
              <Button
                name="next"
                onClickHandler={fetchNext}
                isDisabled={!nextUrl}
              />
            )}
          </div>
          <div className="wrapper__input-container">
            <input
              type="text"
              name="search"
              className="wrapper__input"
              onChange={onFilterChange}
              placeholder="SEARCH"
            />
          </div>
          {filteredPokemon.length > null ? (
            <div className="wrapper__card">
              {filteredPokemon.map((element, index) => {
                return <PokemonCard key={index} pokemon={element} />;
              })}
            </div>
          ) : (
            <div>No results</div>
          )}
          <div className="wrapper__btn">
            {prevUrl && (
              <Button
                name="prev"
                onClickHandler={fetchPrev}
                isDisabled={!prevUrl}
              />
            )}
            {nextUrl && (
              <Button
                name="next"
                onClickHandler={fetchNext}
                isDisabled={!nextUrl}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Wrapper;
