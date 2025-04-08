import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import logo from '@/assets/image/keep-logo.svg';
import logout from '@/assets/image/logout-icon.svg';
import inven from '@/assets/image/inventory_icon.svg';
import invenSelected from '@/assets/image/inventory_icon_white.svg';
import excel from '@/assets/image/excel-uproad-icon.svg';
import excelSelected from '@/assets/image/excel-uproad-icon_white.svg';
import home from '@/assets/image/home-icon.svg';
import homeSelected from '@/assets/image/home-icon_white.svg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 현재 페이지에 따라 아이콘 변경
  const getIcon = (path: string, defaultIcon: string, selectedIcon: string) => {
    return location.pathname === path ? selectedIcon : defaultIcon;
  };

  // 현재 페이지에 따라 네모 배경색 변경
  const getBoxColor = (path: string) => {
    return location.pathname === path ? '#5372F1' : '#FAFBFD';
  };

  // 현재 페이지에 따라 위치 변경
  const getBoxPosition = (path: string) => {
    if (path === '/') return { left: '25px', top: '149px' };
    if (path === '/tools_list') return { left: '25px', top: '217px' };
    if (path === '/uproad') return { left: '25px', top: '285px' };
    return { left: '0px', top: '0px' }; // 기본값 (필요시 조정)
  };

  // 클릭 시 해당 페이지로 이동
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <S.page_container>
      <S.nav_container>
        <div>
          <S.logo src={logo} alt="KEEP 로고" />

          <S.IconWrapper
            $bgColor={getBoxColor('/')}
            $position={getBoxPosition('/')}
            onClick={() => handleNavigation('/')}
          >
            <S.home_icon
              src={getIcon('/', home, homeSelected)}
              alt="메인 화면"
            />
          </S.IconWrapper>

          <S.IconWrapper
            $bgColor={getBoxColor('/tools_list')}
            $position={getBoxPosition('/tools_list')}
            onClick={() => handleNavigation('/tools_list')}
          >
            <S.inven
              src={getIcon('/tools_list', inven, invenSelected)}
              alt="물품 리스트"
            />
          </S.IconWrapper>

          <S.IconWrapper
            $bgColor={getBoxColor('/uproad')}
            $position={getBoxPosition('/uproad')}
            onClick={() => handleNavigation('/uproad')}
          >
            <S.excel_uproad
              src={getIcon('/uproad', excel, excelSelected)}
              alt="물품 등록"
            />
          </S.IconWrapper>

          <S.logout src={logout} alt="로그아웃 아이콘" />
        </div>
      </S.nav_container>
    </S.page_container>
  );
};

export default Navbar;
