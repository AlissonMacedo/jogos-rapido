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

  .table {
    width: 100%;
    max-width: 1200px;
    height: 40px;
    margin: 30px 0 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    p {
      font-family: Roboto;
      font-weight: bold;
      font-size: 2rem;
      color: #666;
      text-transform: uppercase;
    }

    .divRight {
      display: flex;
      flex-direction: row;
      align-items: center;

      .buttonNewClient {
        margin-right: 20px;
        height: 40px;
        background: #fff;
        border: solid 0.5px #ccc;

        :hover {
          background-color: #ddd;
          border: solid 1px #000;
        }
        span {
          color: #555;
        }
      }

      input {
        height: 40px;

        border-radius: 4px;
        border: solid 0.5px #ccc;
        padding: 10px 10px;

        :focus {
          border: solid 1px #555;
        }
        &::placeholder {
          color: rgba(153, 153, 153, 0.7);
        }
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  max-width: 1200px;
  border-radius: 4px;
  background-color: #fff;
  padding: 15px;
  margin: auto;

  thead {
    font-family: Roboto;
    font-size: 1.5rem;
    color: #666;
    text-align: left;

    th {
      height: 20px;
      text-align: center;
    }
  }

  tbody {
    td {
      height: 20px;
      padding-top: 0px;
      font-size: 1.2rem;
      color: #888;
      border-top: solid 0.5px;
      border-color: #ddd;
      padding: 10px 0px;

      text-align: center;
      width: 100px;
      font-size: 1.4rem;
    }
    td#codigo {
      text-align: center;
      width: 80px;
    }
    td#produto {
      text-align: left;
      width: 550px;
    }
    td#custo {
      text-align: center;
      width: 100px;
    }
    td#venda {
      text-align: center;
      width: 100px;
    }
    td#estoque {
      text-align: center;
      width: 100px;
    }
    td#console {
      text-align: center;
      width: 100px;
    }

    td#acao {
      width: 80px;

      div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        button {
          border-radius: 0px;
          padding: 5px;
          background-color: #f1f1f1;

          svg {
            color: #666;
          }
          span {
            color: #666;
          }
        }
        button.buttonLeft {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        button.buttonRight {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          font-size: 16px;
        }
      }
    }
  }
`;
