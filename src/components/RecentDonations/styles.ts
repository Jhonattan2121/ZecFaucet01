import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Title = styled.h1`
margin: 0;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  max-height: 300px;
`;

export const Item = styled.li`
   display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.span`
   font-weight: bold;
  width: 100px;
`;

export const Value = styled.span`
margin-left: 16px;


`;