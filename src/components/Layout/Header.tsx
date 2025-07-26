import React from 'react';
import type { ComponentWithClassName } from '@/types';

interface HeaderProps extends ComponentWithClassName {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'Developer Portfolio',
  className = '',
}) => {
  return (
    <header className={`header ${className}`}>
      <nav className='nav'>
        <div className='nav-brand'>
          <h1>{title}</h1>
        </div>
        <ul className='nav-links'>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
