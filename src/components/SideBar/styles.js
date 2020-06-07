import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 270px;
  height: 100%;
  background-color: #2c333f;
  position: fixed;

  .divheader {
    display: flex;
    flex-direction: row;

    align-items: center;
    width: 100%;
    height: 50px;
    background-color: ${lighten(0.1, '#2c333f')};
    padding-left: 10px;

    h1 {
      font-size: 17px;
      color: #fff;
      font-weight: bold;

      margin-left: 15px;
    }
  }

  .divBody {
    margin: 20px 20px;

    section h4 {
      color: #666;
    }

    section ul li {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin: 20px 0;

      p {
        color: #ccc;
        margin-left: 15px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
`;
