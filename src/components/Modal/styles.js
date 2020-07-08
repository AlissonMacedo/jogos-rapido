import styled from 'styled-components';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${(props) => props.display};
  z-index: 1;
`;

export const ModalMain = styled.section`
  position: fixed;
  background: #eee;
  width: 800px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => props.display};
  padding: 20px;
  border: solid 1px;
  border-color: #000;
  border-radius: 5px;
  min-height: 200px;

  p {
    color: #000;
    text-transform: uppercase;
    width: 100%;
    margin-top: 12px;
  }
  p.title {
    font-weight: bold;
    color: ${colors.text.title};
    margin-top: 0px;
    font-size: 20px;
  }

  p.label {
    font-weight: bold;
    color: ${colors.text.title};

    margin-top: 0px;
    font-size: 14px;
  }

  .input {
    background: #eee;
    display: flex;
    text-align: flex-start;
    justify-content: flex-start;
    height: 40px;
    width: 100%;
    border: solid 1px;
    border-color: #ccc;
    border-radius: 4px;
    color: #777;
    margin-top: 8px;
    padding: 8px 8px;
    font-family: inherit;
    font-weight: 600;
    resize: none;
  }

  .form__input {
    font-family: inherit;
    color: #3a3a3a;
    margin-top: 8px;

    padding: 8px 8px;
    background-color: #999;
    border: solid 1px;
    border-color: #999;
    border-radius: 4px;
    width: 100%;
    display: block;
    font-weight: 600;
  }

  div.divider {
    border-bottom: solid 0.5px;
    border-color: #ccc;
    width: 100%;

    height: 30px;
    margin-top: 10px;
  }

  div.body {
    height: 235px;
  }

  div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 15px;

    div {
      margin: 0 5px 0 5px;
    }

    div.divNumberFormat {
      input {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        border: solid 1px #ccc;
        background-color: #eee;
        padding: 0 15px;
        margin-top: 8px;
        margin-right: 5px;
      }
      input#pricetotal {
        background: #5555;
      }
      strong {
        white-space: nowrap;
        margin-bottom: 8px;
      }
    }
  }

  div.clientename {
    width: 100%;
  }

  div.divselect {
    div {
      margin-left: 0px;
      padding-right: 0px;

      select {
        width: 120px;
      }
    }
  }

  div.footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    height: 60px;
  }

  button {
    background-color: ${colors.button.background};
    transform: 0.2ms background-color;
    width: 120px;

    span {
      color: #fff;
      font-size: 15px;
    }

    :hover {
      background-color: darken;
    }
  }

  button.confirm {
    margin-right: 10px;
    width: 120px;

    :hover {
      background-color: ${darken(0.1, colors.button.background)};
    }
  }

  button.cancel {
    background-color: ${colors.buttonCancel.background};

    :hover {
      background-color: ${darken(0.1, colors.buttonCancel.background)};
    }
  }

  textarea {
    background: #999;
    display: flex;
    text-align: flex-start;
    justify-content: flex-start;
    height: 80px;
    width: 100%;
    border-radius: 5px;
    border: solid 1px;
    border-color: #000;
    border-radius: 4px;
    color: #000;
    margin-top: 8px;
    padding: 8px 8px;
    font-family: inherit;
    font-weight: 600;
    resize: none;
  }
  button {
    margin-top: 16px;
    height: 42px;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    width: 700px;
  }

  @media (max-width: 762px) {
    width: 500px;
  }

  @media (max-width: 530px) {
    width: 350px;
    height: 460px;

    flex-direction: column;
  }
`;
