import { JSX } from 'react';

const navLinkClassName = 'flex gap-[14px] items-center duration-300 hover:bg-hoverNavLink px-3 py-[10px] rounded-md';

export default function ProjectsList(): JSX.Element {
  return (
    <nav className="flex flex-col gap-[10px] px-[18px] hover:bg-[rgba(80, 48, 229, 0.08)]">
      <div className="flex justify-between">
        <p className="m-0 text-[#787486] text-xs">
          MY PROJECTS
        </p>
        <div
          className="w-4 h-4 border-solid border-[1px] border-[#787486] rounded-md flex items-center justify-center text-sm"
        >
          +
        </div>
      </div>
      <div className={navLinkClassName}>
        <div className="w-2 h-2 bg-[#7AC555] rounded-xl" />
        <p className="m-0">Mobile App</p>
      </div>
      <div className={navLinkClassName}>
        <div className="w-2 h-2 bg-[#FFA500] rounded-xl" />
        <p className="m-0">Website Redesign</p>
      </div>
      <div className={navLinkClassName}>
        <div className="w-2 h-2 bg-[#E4CCFD] rounded-xl" />
        <p className="m-0">Design System</p>
      </div>
      <div className={navLinkClassName}>
        <div className="w-2 h-2 bg-[#76A5EA] rounded-xl" />
        <p className="m-0">Wireframes</p>
      </div>
    </nav>
  );
}
