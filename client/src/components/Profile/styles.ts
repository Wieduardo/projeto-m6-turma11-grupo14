import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const ProfilePicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ProfileName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: var(--grey2);
`;
