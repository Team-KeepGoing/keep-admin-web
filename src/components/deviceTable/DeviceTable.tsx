import React, { useState } from 'react';
import * as S from './style';

type Device = {
  id: number;
  name: string;
  serial: string;
  registerDate: string;
  status: '사용 중' | '사용 가능';
  days: string;
};

const dummyData: Device[] = [
  {
    id: 1,
    name: '아이패드 #1 (가칭)',
    serial: '43211503-21191751',
    registerDate: '2024.12.25',
    status: '사용 중',
    days: '9 일',
  },
  {
    id: 2,
    name: '아이패드 #2 (가칭)',
    serial: '43211503-21191751',
    registerDate: '2024.12.25',
    status: '사용 가능',
    days: '- 일',
  },
  {
    id: 3,
    name: '애플펜슬 #1 (가칭)',
    serial: '43211503-21191751',
    registerDate: '2024.12.25',
    status: '사용 중',
    days: '2 일',
  },
  {
    id: 4,
    name: '애플펜슬 #2 (가칭)',
    serial: '43211503-21191751',
    registerDate: '2024.12.25',
    status: '사용 중',
    days: '15 일',
  },
  {
    id: 5,
    name: '그램 #1 (가칭)',
    serial: '43211503-21191751',
    registerDate: '2024.12.25',
    status: '사용 가능',
    days: '- 일',
  },
  {
    id: 6,
    name: '그램 #2 (가칭)',
    serial: '43211503-21191751',
    registerDate: '2024.12.25',
    status: '사용 가능',
    days: '- 일',
  },
  {
    id: 7,
    name: '아두이노 #1 (가칭)',
    serial: '43211503-21191751',
    registerDate: '2024.12.25',
    status: '사용 가능',
    days: '- 일',
  },
];

const DeviceTable: React.FC = () => {
  const [filter, setFilter] = useState<'전체' | '사용 중' | '사용 가능'>(
    '전체',
  );

  const filteredData =
    filter === '전체'
      ? dummyData
      : dummyData.filter((device) => device.status === filter);

  return (
    <S.Container>
      <S.Title>관리 물품 현황</S.Title>

      {/* 필터 버튼 */}
      <S.ButtonGroup>
        {['사용 중', '사용 가능'].map((status) => (
          <S.Button
            key={status}
            active={filter === status}
            onClick={() => setFilter(status as '사용 중' | '사용 가능')}
          >
            {status}
          </S.Button>
        ))}
      </S.ButtonGroup>

      {/* 테이블 */}
      <S.Table>
        <thead>
          <tr>
            <S.Th>no.</S.Th>
            <S.Th>품명</S.Th>
            <S.Th>분류 번호</S.Th>
            <S.Th>취득 일자</S.Th>
            <S.Th>상태</S.Th>
            <S.Th>사용 기간</S.Th>
            <S.Th>...</S.Th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((device) => (
            <S.Tr key={device.id}>
              <S.Td>{device.id}</S.Td>
              <S.Td>{device.name}</S.Td>
              <S.Td>{device.serial}</S.Td>
              <S.Td>{device.registerDate}</S.Td>
              <S.Td>{device.status}</S.Td>
              <S.Td>{device.days}</S.Td>
              <S.Td>
                <S.Checkbox type="checkbox" />
              </S.Td>
            </S.Tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default DeviceTable;
