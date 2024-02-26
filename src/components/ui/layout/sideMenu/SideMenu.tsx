import { JSX } from 'react';
import NavList from './components/NavList.tsx';
import ProjectsList from './components/ProjectsList.tsx';
import ShareThoughts from './components/ShareThoughts.tsx';

function SideMenu(): JSX.Element {
  return (
    <div className="flex flex-col w-64 border-solid border-r-[1px] border-[#DBDBDB] gap-[30px] h-screen">
      <div className="flex justify-center items-center min-h-[88px] border-solid border-b-[1px] border-[#DBDBDB] hover:bg-[rgba(80, 48, 229, 0.08)]">
        <p>Project Mng.</p>
      </div>
      <NavList />
      <div className="h-[1px] bg-[#DBDBDB] mx-3" />
      <ProjectsList />
      <ShareThoughts />
    </div>
  );
}

export default SideMenu;
