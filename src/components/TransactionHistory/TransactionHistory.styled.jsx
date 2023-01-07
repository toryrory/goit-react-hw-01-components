import styled from 'styled-components'

export const Table = styled.table`
  box-shadow: 7px 9px 17px -4px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  width: 600px;
  border-collapse: collapse;
  text-align: center;
`;
export const TableHead = styled.thead`
    background-color: #5fd55f;
    text-transform: uppercase;
`
export const TableHeadData = styled.th`
  :not(:last-child) {
    border-right: 1px solid white;
  }
  padding: 10px;
`;
export const TableData = styled.td`
border-right: 1px solid white;
border-left: 1px solid white;
  font-size: 18px;
  padding: 10px;
`;
export const TableRow = styled.tr`
  :nth-child(odd) {
    background: #fdfdfb;
  }
  :nth-child(even) {
    background: #c1f5c7;
  }
`;