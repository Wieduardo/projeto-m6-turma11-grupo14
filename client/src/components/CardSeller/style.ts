import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 440px;
  height: 426px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px 44px;
  border-radius: 4px;
  background: #FFF;
  background: red;
  & > div {
      width: 100%;
      max-width: 352px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
  
      & > img {
      
          width: 100%;
          max-width: 104px;
          height: 104px;
          background: #4529E6;
          border-radius: 50%;
      }
      & > h4 {
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
          padding: 30px 0 15px 0;
          color: #212529;
      }
      & > p {
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          
          color: #495057;
          padding-bottom: 15px;
      }
      & > button {
          margin: 0 auto;
      }
  }
`;

export { Container };
