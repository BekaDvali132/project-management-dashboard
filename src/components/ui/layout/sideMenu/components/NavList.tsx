const navLinkClassName = 'flex gap-[14px] items-center duration-300 hover:bg-hoverNavLink px-3 py-[10px] rounded-md';

export default function NavList() {
  return (
    <nav className="flex flex-col gap-[10px] px-[18px] hover:bg-[rgba(80, 48, 229, 0.08)]">
      <div className={navLinkClassName}>
        <p className="m-0">Home</p>
      </div>
      <div className={navLinkClassName}>
        <p className="m-0">Messages</p>
      </div>
      <div className={navLinkClassName}>
        <p className="m-0">Tasks</p>
      </div>
      <div className={navLinkClassName}>
        <p className="m-0">Members</p>
      </div>
      <div className={navLinkClassName}>
        <p className="m-0">Settings</p>
      </div>
    </nav>
  );
}
