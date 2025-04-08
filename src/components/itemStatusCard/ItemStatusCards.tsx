import React from 'react';
import * as S from './style';

interface ItemCountData {
  totalItems: number;
  availableItems: number;
  inUseItems: number;
  unavailableItems: number;
}

// ✅ 더미 데이터
const dummyData: ItemCountData = {
  totalItems: 86,
  availableItems: 24,
  inUseItems: 62,
  unavailableItems: 14,
};

const statusList = [
  {
    label: '보유 중인 기자재 총 갯수',
    key: 'totalItems',
    textColor: '#5372F1',
    bgColor: '#F1F3FF',
  },
  {
    label: '사용 가능한 기자재 총 갯수',
    key: 'availableItems',
    textColor: '#E98862',
    bgColor: '#FFF6EA',
  },
  {
    label: '사용 중인 기자재 총 갯수',
    key: 'inUseItems',
    textColor: '#F6556C',
    bgColor: '#FFEFF2',
  },
  {
    label: '사용 불가한 기자재 총 갯수',
    key: 'unavailableItems',
    textColor: '#5F5F5F',
    bgColor: '#E9E9E9',
  },
];

const ItemStatusCards = () => {
  const data = dummyData;

  return (
    <S.CardContainer>
      {statusList.map((status) => {
        const words = status.label.split(' ');
        const firstLine = words.slice(0, 2).join(' '); // 앞 2단어
        const secondLine = words.slice(2).join(' '); // 나머지

        return (
          <S.Card key={status.key}>
            <S.Badge textColor={status.textColor} bgColor={status.bgColor}>
              {data[status.key as keyof ItemCountData]}
            </S.Badge>
            <S.Label>
              <S.NoWrap style={{ color: status.textColor }}>
                {firstLine}
              </S.NoWrap>
              <S.NoWrap>{secondLine}</S.NoWrap>
            </S.Label>
          </S.Card>
        );
      })}
    </S.CardContainer>
  );
};

export default ItemStatusCards;
