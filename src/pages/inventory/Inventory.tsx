import * as S from './style';
import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import DeviceTable from '@/components/deviceTable2/DeviceTable2';
import ItemDetailCard from '@/components/itemDetailCard/ItemDetailCard';

const Inventory = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  return (
    <S.page_container>
      <Navbar />
      <S.title>관리 물품 현황</S.title>
      <S.Div>
        <DeviceTable onSelectItem={setSelectedItemId} />
      </S.Div>
      <S.Div2>
        {selectedItemId && <ItemDetailCard id={selectedItemId} />}
      </S.Div2>
    </S.page_container>
  );
};

export default Inventory;
