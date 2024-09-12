import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
`;

export const MainText = styled.h2`
  text-align: center;
`;

export const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ButtonNext = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #1b1b1b;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #ffffff;
  color: #1b1b1b;
  cursor: pointer;
`;
export const ButtonPrev = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #1b1b1b;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #ffffff;
  color: #1b1b1b;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
