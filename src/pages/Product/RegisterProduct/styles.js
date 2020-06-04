import styled from 'styled-components';
import { darken } from 'polished';

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

    div.divMaster {
      min-height: 200px;
      background: #fff;
      padding: 10px 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .divColumn {
        display: flex;
        width: 760px;
        flex-direction: column;
        justify-content: flex-start;
      }

      .divButtons {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        button {
          height: 40px;
          margin-top: 10px;
          border-radius: 5px;
          border-width: 0px;

          font-weight: bold;
          color: white;
          font-size: 20px;
          border: solid 1px #666;
        }
        .green {
          background-color: #46c37b;

          :hover {
            background-color: ${darken(0.08, '#46c37b')};
          }
        }
        .red {
          background-color: #d26a5d;

          :hover {
            background-color: ${darken(0.08, '#d26a5d')};
          }
        }
      }

      .inputDate {
        margin-top: 10px;
        margin-left: 25px;
        margin-right: 5px;
        p {
          font-size: 20px;
          font-weight: bold;
          margin-left: 4px;
        }

        input,
        textarea {
          font-size: 18px;

          width: 250px;
          min-width: 100%;
          background: #fff;
          border: 0;
          border-bottom: solid 1px #ccc;
          border-radius: 0px;
          height: 44px;
          padding: 0 15px;
          margin-left: 10px;
          color: #000;
          margin: 5px 0 10px;
          &::placeholder {
            color: #666;
          }
        }
      }

      .input {
        width: 97%;
        display: flex;
        flex-direction: column;

        margin: 10px;

        label {
          font-size: 20px;
          font-weight: bold;
          margin-left: 4px;
        }

        .formSelect {
          width: 98%;
          height: 45px;
          margin-top: 2px;
          border: 0px;
          border-bottom: solid 1px #ccc;
          background-color: #fff;
          color: #666;
          font-size: 20px;
          margin-left: 10px;
        }

        .formInput {
          padding: 10px 5px;
          border: 0px;
          border-bottom: solid 0.5px #ccc;
          border-radius: 0px;
          margin: 2px 5px;
          margin-left: 10px;

          color: #888;
          font-size: 20px;

          :focus {
            border-bottom: solid 0.5px #7159c1;
            border-radius: 0px;
          }
        }

        label {
          font-size: 20px;
          font-weight: bold;
        }
        input {
          padding: 0 5px;
          border: 0px;
          border-bottom: solid 0.5px #ccc;
          border-radius: 0px;
          margin: 2px 5px;

          :focus {
            border-bottom: solid 0.5px #7159c1;
            border-radius: 0px;
          }
        }
      }

      .inputRow {
        display: flex;
        margin-top: 10px;
      }
    }
  }
`;
