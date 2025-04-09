import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './style';

type Device = {
  id: number;
  name: string;
  serial: string;
  registerDate: string;
  status: '사용 중' | '사용 가능' | '사용 불가';
};

type DeviceApiResponse = {
  id: number;
  item: string;
  serialNumber: string;
  acquisitionDate: string;
  price: string;
  rentedBy: string | null;
  place: string;
  returnDate: string | null;
  rentalDate: string | null;
  usageDate: string | null;
  status: 'AVAILABLE' | 'UNAVAILABLE' | string;
};

interface DeviceTable2Props {
  onSelectItem: (id: number) => void;
}

const DeviceTable2: React.FC<DeviceTable2Props> = ({ onSelectItem }) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [filter, setFilter] = useState<
    '전체' | '사용 중' | '사용 가능' | '사용 불가'
  >('전체');

  useEffect(() => {
    axios
      .get('http://15.165.16.79:8080/teacher/item/list')
      .then((res) => {
        const fetched = res.data.data.map(
          (item: DeviceApiResponse): Device => ({
            id: item.id,
            name: item.item,
            serial: item.serialNumber,
            registerDate: new Date(item.acquisitionDate).toLocaleDateString(
              'ko-KR',
            ),
            status: convertStatus(item.status),
          }),
        );
        setDevices(fetched);
      })
      .catch((err) => {
        console.error('서버 요청 실패:', err);
      });
  }, []);

  const convertStatus = (status: string): Device['status'] => {
    switch (status) {
      case 'AVAILABLE':
        return '사용 가능';
      case 'UNAVAILABLE':
        return '사용 불가';
      default:
        return '사용 중';
    }
  };

  const filteredData =
    filter === '전체'
      ? devices
      : devices.filter((device) => device.status === filter);

  return (
    <S.Container>
      <S.Title>물품 리스트</S.Title>
      <S.FilterButtons>
        <S.StyledFilterButton
          $bgColor="#FFEFF2"
          $textColor="#F6556C"
          onClick={() => setFilter('사용 중')}
          $active={filter === '사용 중'}
        >
          사용 중
        </S.StyledFilterButton>
        <S.StyledFilterButton
          $bgColor="#FFF6EA"
          $textColor="#E98862"
          onClick={() => setFilter('사용 가능')}
          $active={filter === '사용 가능'}
        >
          사용 가능
        </S.StyledFilterButton>
        <S.StyledFilterButton
          $bgColor="#E9E9E9"
          $textColor="#4D5969"
          onClick={() => setFilter('사용 불가')}
          $active={filter === '사용 불가'}
        >
          사용 불가
        </S.StyledFilterButton>
      </S.FilterButtons>

      <S.Table>
        <thead>
          <tr>
            <S.Th>no.</S.Th>
            <S.Th>품명</S.Th>
            <S.Th>분류 번호</S.Th>
            <S.Th>취득 일자</S.Th>
            <S.Th>상태</S.Th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((device, index) => (
            <S.Tr
              key={device.id}
              onClick={() => onSelectItem(device.id)}
              style={{ cursor: 'pointer' }}
            >
              <S.Td>{index + 1}</S.Td>
              <S.Td>{device.name}</S.Td>
              <S.Td>{device.serial}</S.Td>
              <S.Td>{device.registerDate}</S.Td>
              <S.Td>{device.status}</S.Td>
            </S.Tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default DeviceTable2;
