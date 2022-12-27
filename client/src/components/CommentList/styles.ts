import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

export const PrincipalContent = styled.div`
  width: 90%;
  max-width: 752px;

  background-color: var(--grey10);
  position: relative;
  top: -250px;
  padding-left: 28px;

  @media (max-width: 720px) {
    height: 355px;
    top: -200px;
  }
  height: 240px;

  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  @media (min-width: 1240px) {
    left: -242px;
  }
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: var(--grey1);
  margin-bottom: 28px;
`;

export const List = styled.div`
    
`;
