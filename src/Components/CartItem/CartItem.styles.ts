import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 100%;
    object-fit: fill;
    margin-left: 40px;
  }

  .imgWrapper {
    padding: 1rem;
    max-width: 80px;
    justify-content: center;
    align-items: center;
  }
`;