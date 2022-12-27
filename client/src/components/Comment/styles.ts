import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 48px;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: var(--random1);
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: var(--grey1);
`;

export const Date = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: var(--grey3);
`;

export const CommentText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: var(--grey2);
  text-align: justify;
  width: 640px;
`;
