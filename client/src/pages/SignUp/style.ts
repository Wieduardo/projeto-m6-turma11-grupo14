import styled from "styled-components";

const Container = styled.div`
  & > div {
    width: 100%;
    background-color: #f1f3f5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
`;

export { Container };
