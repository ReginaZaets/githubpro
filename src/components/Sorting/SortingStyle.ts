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
  margin-left: 120px;
  border: 12px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 34px;
  height: 100px;
`;

export const ListSortingUl = styled.p`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
