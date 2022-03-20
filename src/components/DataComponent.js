import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { ImSpinner } from "react-icons/im";
import { FiSun } from "react-icons/fi";
import List from "./List";
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
  const [filter, setFilter] = useState([]);

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

  function scrollTo() {
    setTimeout(
      () =>
        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: "smooth",
        }),
      1000
    );
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

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
        <form>
          <input
            onChange={handleChange}
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Search for Pokemon"
          />
        </form>
        <Wrapper>
          <p>Id</p>
          <p>Name</p>
          <p>Image</p>
          <p>Type</p>
          <p>Click on Pokemon for more info</p>
        </Wrapper>
        {loading ? (
          <ImSpinner />
        ) : (
          <ul>
            {list.map(
              (pokemon) =>
                pokemon.name.includes(filter) && (
                  <List
                    loading={loading}
                    id={pokemon.id}
                    key={pokemon.id}
                    name={pokemon.name}
                    sprite={pokemon.sprites.other.dream_world.front_default}
                    type={pokemon.types[0].type.name}
                    weight={pokemon.weight}
                    height={pokemon.height}
                  />
                )
            )}
          </ul>
        )}
        <div id="one"></div>
        <button
          onClick={() => {
            loadData();
            scrollTo();
          }}
        >
          Load more
        </button>
      </Container>
    );
  }
};

export default DataComponent;
