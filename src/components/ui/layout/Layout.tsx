import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header.tsx';
import SideMenu from './sideMenu/SideMenu.tsx';

export default function Layout(): JSX.Element {
  return (
    <div className="flex min-h-screen">
      <SideMenu />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
