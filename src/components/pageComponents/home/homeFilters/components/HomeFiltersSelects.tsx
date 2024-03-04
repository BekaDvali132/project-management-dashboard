/// <reference types="vite-plugin-svgr/client" />
import { JSX } from 'react';
import { Select } from '@mantine/core';
// eslint-disable-next-line import/no-unresolved
import Filter from '../../../../../assets/svgs/filter.svg?react';
// eslint-disable-next-line import/no-unresolved
import Calendar from '../../../../../assets/svgs/calendar.svg?react';

function HomeFiltersSelects(): JSX.Element {
  return (
    <div className="flex gap-5">
      <Select
        placeholder="Filter"
        leftSection={<Filter />}
        w={122}
      />
      <Select
        placeholder="Today"
        leftSection={<Calendar />}
        w={122}
      />
    </div>
  );
}

export default HomeFiltersSelects;
