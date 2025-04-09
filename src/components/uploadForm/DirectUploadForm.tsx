import React, { useState } from 'react';
import axios from 'axios';
import * as S from './style';

const DirectUploadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    item: '여기를 눌러 작성하세요',
    serialNumber: '여기를 눌러 작성하세요',
    acquisitionDate: '여기를 눌러 작성하세요',
    price: '여기를 눌러 작성하세요',
    details: '여기를 눌러 작성하세요',
    place: '여기를 눌러 작성하세요',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        price: Number(formData.price.replace(/,/g, '')),
        acquisitionDate: new Date(formData.acquisitionDate).toISOString(),
      };

      await axios.post('http://15.165.16.79:8080/teacher/item', payload);
      alert('물품이 성공적으로 등록되었습니다.');
    } catch (error) {
      alert('등록에 실패했습니다.');
      console.error(error);
    }
  };

  return (
    <div>
      <S.FormTitle>직접 업로드</S.FormTitle>
      <S.FormWrapper>
        <S.FieldsContainer>
          <S.FieldWrapper>
            <S.FirstFieldLabel>품명 (기기명)</S.FirstFieldLabel>
          </S.FieldWrapper>
          <S.FirstFieldInput
            name="item"
            value={formData.item}
            onChange={handleChange}
          />
          <Field
            label="분류 번호"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
          />
          <Field
            label="취득 일자"
            name="acquisitionDate"
            value={formData.acquisitionDate}
            onChange={handleChange}
          />
          <Field
            label="취득 단가"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <Field
            label="세부 제품명"
            name="details"
            value={formData.details}
            onChange={handleChange}
          />
          <Field
            label="위치"
            name="place"
            value={formData.place}
            onChange={handleChange}
          />
        </S.FieldsContainer>
        <S.SubmitButton onClick={handleSubmit}>등록</S.SubmitButton>
      </S.FormWrapper>
    </div>
  );
};

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Field: React.FC<FieldProps> = ({ label, name, value, onChange }) => (
  <S.FieldWrapper>
    <S.FieldLabel>{label}</S.FieldLabel>
    <S.FieldInput name={name} value={value} onChange={onChange} />
  </S.FieldWrapper>
);

export default DirectUploadForm;
