import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 100%;
    height: 50px;
    background: #fff;
  }

  .titleOptions {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 30px 0;

    h3 {
      font-size: 30px;
      color: #555;
    }
  }

  .divOptionsRight {
    display: flex;
    flex-direction: row;

    button {
      margin-right: 20px;
      height: 45px;
      background: #fff;
      border: solid 1px #555;

      :hover {
        background-color: #ddd;
        border: solid 1px #000;
      }
      span {
        color: #555;
      }
    }

    input {
      border-radius: 4px;
      border: solid 0.5px #ccc;
      padding: 0px 10px;

      :focus {
        border: solid 1px #555;
      }
    }
  }

  .body {
    width: 100%;
    max-width: 1200px;
    padding: 0px 20px;

    div {
      min-height: 200px;
    }
  }
`;

export const ProjectTable = styled.table`
  width: 100%;
  max-width: 1200px;
  border-radius: 4px;
  background-color: #fff;
  padding: 30px;
  margin: auto;

  border-radius: 4px;
  border: solid 0.5px #ccc;

  thead {
    font-family: Roboto;
    color: #666;
    text-align: left;

    th {
      height: 40px;
    }
    th#acoes {
      text-align: center;
    }
  }

  tbody {
    td {
      padding-top: 20px;

      font-size: 16px;
      color: #888;

      border-top: solid 0.5px;
      border-color: #ddd;
      padding-bottom: 20px;
    }

    td#codigo {
      width: 80px;
    }
    td#title {
      text-align: left;
      width: 550px;
    }
    td#custo {
      text-align: left;
      width: 100px;
    }
    td#venda {
      text-align: left;
      width: 100px;
    }
    td#estoque {
      text-align: left;
      width: 100px;
    }
    td#console {
      text-align: left;
      width: 100px;
    }
    td#acaoBT {
      width: 140px;
      display: flex;
      flex-direction: row;

      justify-content: space-around;

      button#buttonEditar {
        background: none;
        border: 0;
        color: #4d85ee;
        text-transform: uppercase;
      }
      button#buttonApagar {
        background: none;
        border: 0;
        color: #de3b3b;
        text-transform: uppercase;
      }

      button {
        padding-left: 10px;
        font-size: 15px;
      }
    }
  }
`;
