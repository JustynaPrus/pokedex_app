import styled from "styled-components";

export const Container = styled.div`
  max-width: 90%;
  form {
    margin: 20px 0;
    input {
      padding: 5px;
      border: 1px solid grey;
      border-radius: 15px;
      &:focus {
        outline: none;
      }
    }
  }
  button {
    border: none;
    background-color: grey;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 25px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 4fr;
  grid-template-rows: 1fr;
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
