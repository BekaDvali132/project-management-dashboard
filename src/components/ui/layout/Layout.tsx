import { JSX } from 'react';
import Header from './header/Header.tsx';
import SideMenu from './sideMenu/SideMenu.tsx';

interface LayoutProps {
    children: JSX.Element;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen">
      <SideMenu />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}
