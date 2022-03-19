import React, { useState, useEffect } from "react";
import { Wrapper } from "./DataComponent.styles";

const DataComponent = () => {
  const API = `https://pokeapi.co/api/v2/pokemon?limit=20`;

  const [list, setList] = useState([]);
  const [loadMore, setLoadMore] = useState(API);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    const data = await fetch(loadMore)
      .then((response) => response.json())
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    setLoadMore(data.next);

    function createPokemon(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        )
          .then((response) => response.json())
          .catch((error) => {
            setError(error);
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

  return (
    <>
      <Wrapper>
        <button>Load more</button>
      </Wrapper>
    </>
  );
};

export default DataComponent;
