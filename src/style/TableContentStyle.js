import styled from "styled-components";

export const TablecontentContainner = styled.div`
  width: auto;
`;

export const TablecontentColumn = styled.div`
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px rgb(64 25 109 / 7%);
  border-radius: 3px;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 0.5px solid #dddddd;
    text-align: center;
    padding: 1em;
  }
`;

export const TablecontentRow = styled.div`
  padding: 1em;
  border-bottom: 1px solid rgba(219, 220, 224, 0.5);
`;

export default TablecontentContainner;
