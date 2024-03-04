import { JSX } from 'react';
import HomeFiltersSelects from './components/HomeFiltersSelects.tsx';
import HomeFiltersPlacement from './components/HomeFiltersPlacement.tsx';

function HomeFilters(): JSX.Element {
  return (
    <div className="flex justify-between items-center">
      <HomeFiltersSelects />
      <HomeFiltersPlacement />
    </div>
  );
}

export default HomeFilters;
