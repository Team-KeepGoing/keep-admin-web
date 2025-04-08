import styled from 'styled-components';

export const page_container = styled.div`

`;

export const logo = styled.img`
  position: absolute;
  width: 38.12px;
  height: 35.99px;
  left: 30%;
  top: 61px;
`;
export const logout = styled.img`
  position: absolute;
  left: 32%;
  top: 69.94%;
  bottom: 7.81%;
`;
export const home_icon = styled.img`
  position: absolute;
  left: 28%;
  top: 24%;
  bottom: 81.93%;
`;
export const inven = styled.img`
  position: absolute;
  left: 25%;
  top: 29%;
  bottom: 81.93%;
`;
export const excel_uproad = styled.img`
  position: absolute;
  left: 28%;
  top: 29%;
  bottom: 68.65%;
`;
export const nav_container = styled.div`
  position: absolute;
  width: 100px;
  height: 1024px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.05);
`;
export const IconWrapper = styled.div<{
  $bgColor: string;
  $position: { left: string; top: string };
}>`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: ${(props) => props.$bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  left: ${(props) => props.$position.left};
  top: ${(props) => props.$position.top};
`;
