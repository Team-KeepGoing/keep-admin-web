import styled from 'styled-components';
// 스타일 정의
export const Container = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-family: 'Pretendard';
  margin-left: 10px;
  margin-top: 40px;
  margin-bottom: -28px; // 👈 추가! 아래와의 간격 조정
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  color: #2a2a2c;
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
  width: 98%;
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
