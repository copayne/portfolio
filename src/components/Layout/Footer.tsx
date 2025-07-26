import React from 'react';
import type { ComponentWithClassName } from '@/types';

interface FooterProps extends ComponentWithClassName {
  year?: number;
}

export const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  className = '',
}) => {
  return (
    <footer className={`footer ${className}`}>
      <div className='footer-content'>
        <p>
          &copy; {year} Developer Portfolio. Built with React + TypeScript +
          Vite.
        </p>
        <div className='footer-links'>
          <a href='#privacy' aria-label='Privacy Policy'>
            Privacy
          </a>
          <a href='#terms' aria-label='Terms of Service'>
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
