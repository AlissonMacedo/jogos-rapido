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

  .body {
    display: flex;
    width: 100%;

    section.lastsale {
      width: 50%;

      div {
        background: #fff;
        border-radius: 4px;
        margin: 20px;
        border-radius: 4px;
        border: solid 0px #ccc;

        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          background: #eee;
          padding: 0 15px;
          text-transform: uppercase;
        }
      }
    }

    section.resume {
      width: 50%;

      div.table {
        background: #fff;
        border-radius: 4px;
        margin: 20px;
        border-radius: 4px;
        border: solid 0px #ccc;

        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          background: #eee;
          padding: 0 15px;
          text-transform: uppercase;
        }

        form.filter {
          display: flex;
          flex-direction: row;
          margin: 10px 10px;
          align-items: center;

          input,
          textarea {
            width: 100px;
            min-width: 100%;
            background: #f1f1f1;
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #333;
            margin: 10px 10px 10px;
            &::placeholder {
              color: #333;
            }
          }

          .inputDate {
            display: flex;
            align-items: center;
            margin: 0 10px;
          }

          button.search {
            background-color: #7159c1;
            margin: 10px 20px 10px;
            padding: 10px;
            height: 44px;
            border-radius: 4px;
            border-width: 0px;
            color: #fff;
          }
        }
      }
    }
  }
`;

export const SalesTable = styled.table`
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  padding: 15px;
  margin: auto;

  thead {
    font-family: Roboto;
    font-size: 1.2rem;
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
    }

    td#codigo {
      width: 50px;
      text-align: center;
      font-size: 1.3rem;
      font-weight: bold;
    }
    td#produto {
      width: 150px;
      text-align: center;
      font-size: 1.3rem;
      font-weight: bold;
    }
    td#status {
      width: 200px;
      text-align: center;
      font-size: 1.3rem;

      div {
        background: #7159c1;
        border-radius: 6px;
        padding: 5px 0px;
        margin: 0 10px;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
      }
    }
    td#venda {
      text-align: center;
      width: 100px;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
`;

export const ResumesTable = styled.table`
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  padding: 15px;
  margin: auto;

  thead {
    font-family: Roboto;
    font-size: 1.2rem;
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
    }

    td#title {
      width: 150px;
      text-align: center;
      font-size: 1.3rem;
      font-weight: bold;
    }

    td#venda {
      text-align: right;
      width: 100px;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
`;

export const ResumesTableTotal = styled.table`
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  padding: 15px;
  margin: auto;

  thead {
    font-family: Roboto;
    font-size: 1.2rem;
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
    }

    td#title {
      width: 70%;
      text-align: center;
      font-size: 1.3rem;
      font-weight: bold;
    }
    td#produto {
      width: 30%;
      text-align: right;
      font-size: 1.3rem;
      font-weight: bold;
    }

    td#venda {
      text-align: center;
      width: 100px;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
`;
