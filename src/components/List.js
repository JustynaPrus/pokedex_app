import React, { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { Wrapper } from "./List.styles";

const List = ({ name, type, sprite, height, weight, loading }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {loading ? (
        <ImSpinner />
      ) : (
        <Wrapper onClick={handleClick}>
          <p>{name}</p>
          <img src={sprite} alt={name} />
          <p>{type}</p>
          {isVisible ? <p>height: {height}</p> : null}
          {isVisible ? <p>weight: {weight}</p> : null}
        </Wrapper>
      )}
    </>
  );
};

export default List;
