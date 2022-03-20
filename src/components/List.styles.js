import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 20px;
  cursor: pointer;
  img {
    max-height: 80px;
    max-width: 80px;
  }
  div {
    display: flex;
  }
`;
