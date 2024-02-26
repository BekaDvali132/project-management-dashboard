import SearchInput from '../../inputs/SearchInput.tsx';
import HeaderActions from './components/HeaderActions.tsx';
import HeaderProfile from './components/HeaderProfile.tsx';

export default function Header() {
  return (
    <header className="h-[88px] px-[48px] flex justify-between border-solid border-b-[1px] border-[#DBDBDB] items-center">
      <SearchInput
        name="search"
        placeholder="Search for anything..."
      />
      <div className="flex gap-12">
        <HeaderActions />
        <HeaderProfile />
      </div>
    </header>
  );
}
