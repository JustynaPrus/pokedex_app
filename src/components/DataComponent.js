import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import List from "./List";
import Filter from "./Filter";
import { Container, Wrapper, Header } from "./DataComponent.styles";
import { ThemeContext } from "../theme";
import { useContext } from "react";

const DataComponent = () => {
  const API = `https://pokeapi.co/api/v2/pokemon?limit=20`;

  const [list, setList] = useState([]);
  const [loadMore, setLoadMore] = useState(API);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  const loadData = async () => {
    const data = await fetch(loadMore)
      .then((response) => response.json())
      .catch((error) => {
        setError(error);
      });

    setLoadMore(data.next);

    function createPokemon(result) {
      setLoading(true);
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        )
          .then((response) => response.json())
          .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          });

        setList((list) => [...list, res]);
      });
    }
    createPokemon(data.results);
    await console.log(list);
    return { list, loading, error };
  };

  useEffect(() => {
    loadData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <Container>
        <Header>
          <h1>Pokedex App</h1>
          {isDark ? (
            <FiSun onClick={toggleTheme} size={20} />
          ) : (
            <MdDarkMode onClick={toggleTheme} size={20} />
          )}
        </Header>
        <Filter />
        <Wrapper>
          <p>Name</p>
          <p>Image</p>
          <p>Type</p>
          <p>Click on Pokemon for more info</p>
        </Wrapper>
        {list.map((pokemon) => (
          <List
            loading={loading}
            key={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            weight={pokemon.weight}
            height={pokemon.height}
          />
        ))}
        <button onClick={() => loadData()}>Load more</button>
      </Container>
    );
  }
};

export default DataComponent;
