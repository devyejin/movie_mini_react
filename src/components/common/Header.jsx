import React from 'react';
import MenuLink from './MenuLink';

export default function Header() {
  return (
    <header>
      <div>
        <MenuLink path={'/'}>{'메인페이지'}</MenuLink>
      </div>
      <div>
        <MenuLink path={'/my'}>{'마이페이지'}</MenuLink>
      </div>
      <div>
        <MenuLink path={'/movies'}>{'영화 상세페이지'}</MenuLink>
      </div>
      <div>
        <MenuLink path={'/auth/login'}>{'로그인 페이지'}</MenuLink>
      </div>
      <input type="text" placeholder="검색하는용도" />
    </header>
  );
}
