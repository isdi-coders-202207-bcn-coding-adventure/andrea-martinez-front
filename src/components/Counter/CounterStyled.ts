import styled from "styled-components";

export const CounterStyle = styled.ul`
  padding: 0;
  margin: 0 auto;
  display: flex;
  list-style: none;
  gap: 1rem;
  width: fit-content;
  padding: 3rem;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: oxanium, Verdana, Geneva, Tahoma, sans-serif;
  }

  & .counter-item__number {
    border-radius: 14px;
    color: rgba(37, 50, 66, 255);
    background-color: rgba(255, 198, 1, 255);
    padding: 1.5rem;
    font-size: 2rem;
  }

  & .counter-item__data {
    color: white;
  }
`;
