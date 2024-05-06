import styled from "styled-components";



export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-top: 0;
  font-weight: bold;
  color: #333;
`;

export const List = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Item = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Label = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const DonationLabel = styled(Label)`
  width: 100px;
`;

export const AmountLabel = styled(Label)`
  width: 75px;
  text-align: right;
`;

export const DatetimeLabel = styled(Label)`
  text-align: right;
  padding-right: 20px;
`;

export const Value = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;