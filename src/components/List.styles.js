import styled from "styled-components";

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 1fr;
  margin: 20px 0;
  cursor: pointer;
  img {
    max-height: 80px;
    max-width: 80px;
  }
`;
