import React, { FC, memo } from 'react';
import { Search } from '../Search';

export const Header: FC = memo(() => {
  return (
    <header className="header">
      <div className="header__content">
        <Search />
      </div>
    </header>
  );
});

Header.displayName = 'Header';
