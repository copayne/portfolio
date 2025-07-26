import React from 'react';
import type { ComponentWithChildren, ComponentWithClassName } from '@/types';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps extends ComponentWithChildren, ComponentWithClassName {
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  className = '',
}) => {
  return (
    <div className={`layout ${className}`}>
      <Header title={title} />
      <main className='main-content'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
