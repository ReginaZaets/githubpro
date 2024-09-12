import styled from "styled-components";

export const SearchMain = styled.div`
  padding: 20px;
`;

export const SeachCommon = styled.div`
  display: flex;
  gap: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  flex-grow: 100;
  background-color: transparent;
  border: 1px solid black;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: black;
`;

export const SeachButton = styled.button`
  max-width: 1000px;
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
