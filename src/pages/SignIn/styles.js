import styled from 'styled-components';
import Background from '~/assets/background.jpg';

export const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0b0a0d;
  background-image: url(${Background});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormCenter = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .divimg {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    img {
      width: 200px;
    }
  }
  .form {
    height: 400px;
    display: flex;
    flex-direction: column;

    margin: 20px 30px;
    span {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    input {
      margin: 10px 0;
      padding: 13px 15px;

      border: 0px;
      border-bottom: 1px solid #ddd;

      & + span {
        margin-top: 20px;
      }
    }

    .divbutton {
      width: 100%;
      height: 50px;

      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 200px;
        height: 50px;
        font-size: 24px;
      }
    }
  }
`;
