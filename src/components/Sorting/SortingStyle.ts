import styled from "styled-components";

export const ButtonSorting = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid #1b1b1b;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  background-color: #ffffff;
  color: #1b1b1b;
  margin-right: 10px;
  z-index: 0;
  cursor: pointer;
  &:focus {
    background-color: #1b1b1b;
    color: #ffffff;
  }
`;

export const ListSorting = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ListSortingItem = styled.div`
  min-width: 80px;
  position: absolute;
  margin-top: 250px;
  margin-left: 130px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  white-space: nowrap;
`;

export const ListSortingP = styled.p`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ListItem = styled.span`
  cursor: pointer;
`;
