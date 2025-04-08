import * as S from './style';
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import DeviceTable from '@/components/deviceTable/DeviceTable';

const Inventory = () => {
  return (
    <S.page_container>
      <Navbar />
      <S.title>관리 물품 현황</S.title>
      <DeviceTable />
    </S.page_container>
  );
};

export default Inventory;
