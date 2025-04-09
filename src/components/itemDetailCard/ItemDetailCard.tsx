import React, { useEffect, useState } from 'react';
import * as S from './style';
import axios from 'axios';

type ItemDetailProps = {
  id: number;
};

type ItemDetail = {
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
  status: 'AVAILABLE' | 'UNAVAILABLE';
};

const ItemDetailCard: React.FC<ItemDetailProps> = ({ id }) => {
  const [detail, setDetail] = useState<ItemDetail | null>(null);

  useEffect(() => {
    axios
      .get(`http://15.165.16.79:8080/teacher/item/${id}`)
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((err) => {
        console.error('물품 상세 조회 실패:', err);
      });
  }, [id]);

  if (!detail) return <div>불러오는 중...</div>;

  return (
    <S.Card>
      <S.Header>
        <S.Title>물품 정보</S.Title>
        <S.EditButton>수정</S.EditButton>
      </S.Header>

      <S.ItemNameRow>
        <S.ItemName>{detail.item}</S.ItemName>
      </S.ItemNameRow>

      <S.StatusRow>
        <S.StatusButton active={detail.status === 'UNAVAILABLE'}>
          사용 중
        </S.StatusButton>
        <S.StatusButton active={detail.status === 'AVAILABLE'}>
          사용 가능
        </S.StatusButton>
      </S.StatusRow>

      <S.InfoList>
        <S.InfoItem>
          <S.InfoItem2>분류 번호</S.InfoItem2>
          <span>{detail.serialNumber}</span>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItem2>취득 일자</S.InfoItem2>
          <span>
            {new Date(detail.acquisitionDate).toLocaleDateString('ko-KR')}
          </span>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItem2>취득 단가</S.InfoItem2>
          <span>{Number(detail.price).toLocaleString()} 원</span>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItem2>세부 제품명</S.InfoItem2>
          <span>{detail.item}</span>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItem2>위치</S.InfoItem2>
          <span>{detail.place}</span>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItem2>사용자</S.InfoItem2>
          <span>{detail.rentedBy || '-'}</span>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItem2>대여일</S.InfoItem2>
          <span>
            {detail.rentalDate
              ? new Date(detail.rentalDate).toLocaleDateString('ko-KR')
              : '-'}
          </span>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItem2>최근 반납일</S.InfoItem2>
          <span>
            {detail.returnDate
              ? new Date(detail.returnDate).toLocaleDateString('ko-KR')
              : '-'}
          </span>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItem2>사용 기간</S.InfoItem2>
          <S.Highlight>-</S.Highlight>
          <span>일</span>
        </S.InfoItem>
      </S.InfoList>

      <S.Bottom>
        <S.BlockButton>사용 불가 처리하기</S.BlockButton>
        <S.Caution>* 되돌릴 수 없는 이벤트입니다.</S.Caution>
      </S.Bottom>
    </S.Card>
  );
};

export default ItemDetailCard;
