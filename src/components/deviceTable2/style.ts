import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

export const Container = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-family: 'Pretendard';
  margin-left: 10px;
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  color: #2a2a2c;
  cursor: default;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  margin-left: 1008px;
`;

export const Button = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border-radius: 6px;
  background: ${({ active }) => (active ? '#1F2937' : '#4B5563')};
  color: white;
  cursor: pointer;
  border: none;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 6px;
`;

export const Th = styled.th`
  background: #f2f3f7;
  padding: 8.5px;
  padding-left: 15px;
  text-align: left;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #4e5a69;
  cursor: default;
`;

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $bgColor: string;
  $textColor: string;
  $active: boolean;
}

export const StyledFilterButton = styled.button<FilterButtonProps>`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
  border: none;
  padding: 8px 20px;
  margin-right: 8px;
  border-radius: 15px;
  cursor: pointer;
`;

export const Td = styled.td`
  padding: 12px;
  background: white;
  border-bottom: 1px solid #d7e2eb;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #4d5967;
`;

export const Tr = styled.tr`
  &:last-of-type td {
    border-bottom: none; /* 데이터의 마지막 행만 가로선 제거 */
  }
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;
export const FilterButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button<{
  bgColor: string;
  textColor: string;
  active?: boolean;
}>`
  padding: 8px 20px;
  border: none;
  border-radius: 999px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  ${({ active }) =>
    active &&
    `
    outline: 2px solid rgba(0,0,0,0.1);
  `}
`;
