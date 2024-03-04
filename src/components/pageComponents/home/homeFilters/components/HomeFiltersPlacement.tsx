/// <reference types="vite-plugin-svgr/client" />
import { JSX, useState } from 'react';
import { Button, Divider } from '@mantine/core';
// eslint-disable-next-line import/no-unresolved
import Calendar from '../../../../../assets/svgs/peopleGroup.svg?react';
import PlacementButton from '../../../../ui/buttons/PlacementButton.tsx';

function HomeFiltersPlacement(): JSX.Element {
  const [placement, setPlacement] = useState<'vertical' | 'horizontal'>('vertical');
  return (
    <div className="flex gap-5 items-center">
      <Button variant="default">
        <div className="flex gap-2">
          <Calendar />
          Share
        </div>
      </Button>
      <Divider orientation="vertical" />
      <PlacementButton active={placement} setActive={setPlacement} activeKey="vertical" />
      <PlacementButton active={placement} setActive={setPlacement} activeKey="horizontal" />
    </div>
  );
}

export default HomeFiltersPlacement;
