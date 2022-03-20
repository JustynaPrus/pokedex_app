import React, { useState } from "react";
import { Wrapper } from "./Filter.styles";

const Filter = () => {
  return (
    <Wrapper>
      <form>
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search for Pokemon"
        />
      </form>
      <select name="select" id="select">
        <option value="normal">normal</option>
        <option value="fighting">fighting</option>
        <option value="flying">flying</option>
        <option value="poison">poison</option>
        <option value="ground">ground</option>
        <option value="rock">rock</option>
        <option value="bug">bug</option>
        <option value="ghost">ghost</option>
        <option value="steel">steel</option>
        <option value="fire">fire</option>
        <option value="water">water</option>
        <option value="grass">grass</option>
        <option value="electric">electric</option>
        <option value="psychic">psychic</option>
        <option value="ice">ice</option>
        <option value="dragon">dragon</option>
        <option value="dark">dark</option>
        <option value="fairy">fairy</option>
        <option value="shadow">shadow</option>
      </select>
    </Wrapper>
  );
};

export default Filter;
