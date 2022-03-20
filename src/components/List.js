import React, { useState } from "react";
import { Wrapper } from "./List.styles";

const List = ({ id, name, type, sprite, height, weight }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Wrapper onClick={handleClick}>
        <p>{id}.</p>
        <p>{capitalizeFirstLetter(name)}</p>
        <img src={sprite} alt={name} />
        <p>{type}</p>
        {isVisible ? <p>height: {height / 10} m</p> : null}
        {isVisible ? <p>weight: {weight / 10} kg</p> : null}
      </Wrapper>
    </>
  );
};

export default List;
