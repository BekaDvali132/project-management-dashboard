import {
  JSX, useEffect, useRef, useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollArea } from '@mantine/core';
import Header from './header/Header.tsx';
import SideMenu from './sideMenu/SideMenu.tsx';

export default function Layout(): JSX.Element {
  const [remount, setRemount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setRemount(true);
    }
  }, [ref]);

  return (
    <div className="flex h-full">
      <SideMenu />
      <div className="flex flex-col flex-1">
        <Header />
        <main ref={ref} className="flex" style={{ height: 'calc(100% - 88px)' }}>
          <ScrollArea
            h={remount ? ref.current?.offsetHeight : 0}
            w="100%"
            scrollbars="y"
          >
            <Outlet />
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
