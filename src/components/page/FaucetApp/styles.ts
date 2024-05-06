import styled from "styled-components";


export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: inherit;
  transition: color 0.3s ease;

  svg {
    margin-right: 5px;
    font-size: 20px;
  }

  &:hover {
    color: #007bff; 
  }
`;

export const Header = styled.h1`
  font-size: 2em;
  margin-top: 20px;
  color: #333;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`;

export const Description = styled.p`
  font-size: 1em;
  color: #555;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

 


