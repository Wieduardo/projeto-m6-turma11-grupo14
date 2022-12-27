import styled from "styled-components";

export const SecondaryContent = styled.aside`
  background-color: var(--grey10);
  width: 440px;
  height: 377px;
  margin-top: 45px;
  margin-left: 46px;
  border-radius: 4px;
  padding-left: 51px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 741px){
    margin: 0;
    padding-left: 14px;
    width: 100%;
    position: relative;
    bottom: 300px;
    max-width: 752px;    
  }
`;

export const ImageSection = styled.div`
  width: 352px;
  height: 248px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1239px){
    width: 100%;
  }
`;

export const Photo = styled.img`
  width: 108px;
`;
