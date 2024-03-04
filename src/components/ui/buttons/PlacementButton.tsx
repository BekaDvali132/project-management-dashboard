/// <reference types="vite-plugin-svgr/client" />
import {
  Dispatch, JSX, SetStateAction,
} from 'react';
// eslint-disable-next-line import/no-unresolved
import Vertical from '../../../assets/svgs/verticalPlacement.svg?react';
// eslint-disable-next-line import/no-unresolved
import Horizontal from '../../../assets/svgs/horizontalPlacement.svg?react';

interface Props {
  activeKey: 'vertical' | 'horizontal'
  active: string
  // eslint-disable-next-line no-unused-vars
  setActive: Dispatch<SetStateAction<'vertical' | 'horizontal'>>
}

function PlacementButton({
  activeKey, active, setActive,
}: Props): JSX.Element {
  const handleChoose = () => {
    setActive(activeKey);
  };
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      type="button"
      onClick={handleChoose}
      className={`flex items-center justify-center w-10 h-10 duration-300 ease-out rounded-md ${active === activeKey && 'bg-[#5030E5]'}`}
    >
      {activeKey === 'vertical' && <Vertical className={active === activeKey ? 'active-placement' : 'inactive-placement'} />}
      {activeKey === 'horizontal' && <Horizontal className={active === activeKey ? 'active-placement' : 'inactive-placement'} />}
    </button>
  );
}

export default PlacementButton;
