/// <reference types="vite-plugin-svgr/client" />
import { JSX } from 'react';
// eslint-disable-next-line import/no-unresolved
import Bulb from '../../../../../assets/svgs/lamp.svg?react';

export default function ShareThoughts():JSX.Element {
  return (
    <div className="px-[30px] py-[25px] flex flex-col items-center">
      <div className="h-[200px] w-full rounded-lg share-thoughts">
        <div className="share-thougths-bulb">
          <Bulb />
          <div className="shadow" />
        </div>
        <div className="flex flex-col gap-2 items-center mt-3">
          <p className="text-sm">Thoughts Time</p>
          <p className="text-sm text-center">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
          <button
            type="button"
            className="text-sm bg-white border-none py-3 px-[27px] rounded-lg"
          >
            Thoughts Time
          </button>
        </div>
      </div>
    </div>
  );
}
