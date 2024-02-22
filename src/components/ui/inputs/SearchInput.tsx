import { JSX } from 'react';
// eslint-disable-next-line import/no-unresolved
import Search from '../../../assets/svgs/search.svg?react';

interface SearchInputProps {
  placeholder: string
  name: string
}

function SearchInput({ name, placeholder }: SearchInputProps): JSX.Element {
  return (
    <div className="relative">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="search-input"
      />
      <Search className="absolute left-0 top-0 translate-x-1/2 translate-y-1/2" />
    </div>
  );
}

export default SearchInput;
