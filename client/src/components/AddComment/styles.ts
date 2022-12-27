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
  top: -80px;
  padding-left: 28px;

  @media (max-width: 720px) {
    height: 355px;
    top: -50px;
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

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: var(--random1);
  margin-right: 16px;
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: var(--grey1);
`;

export const CommentForm = styled.form`
  width: 100%;
`

export const CommentsOptions = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
`;

export const Option = styled.p`
  border-radius: 24px;
  background-color: var(--grey7);
  width: max-content;
  height: 24px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 8px;
`;

export const TextAreaSection = styled.div`
  width: 100%;
`;
