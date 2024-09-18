import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const ListItem = styled.span`
  cursor: pointer;
  width: 200px;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 20px;
  position: relative;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ListUser = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  border: 1px solid #ddd;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  white-space: nowrap;
`;

export const ListUserItem = styled.span`
  display: flex;
  gap: 10px;
`;
