import styled from "styled-components";

export const Container = styled.div`
  max-width: 90%;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-template-rows: 1fr;
  margin: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
