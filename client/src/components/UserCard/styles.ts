import styled from "styled-components";

export const Container = styled.div`
  height: 461px;
  width: 90%;
  position: relative;
  top: 45px;
  background-color: var(--grey10);
  border-radius: 4px;
  padding-left: 29px;
  display: flex;
  flex-direction: column;
`;

export const ProfilePicture = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 52px;
  margin-top: 44px;
`;

export const UsernameAndType = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const Username = styled.p`
  margin-right: 17px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: var(--grey1);
`;

export const UserType = styled.p`
  background: var(--brand4);
  border-radius: 4px;
  padding: 4px 8px 4px 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: var(--brand1);
`;

export const UserDescription = styled.p`
  margin-top: 24px;
  text-align: justify;
  margin-right: 22px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: var(--grey2);
`;
