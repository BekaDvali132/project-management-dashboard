import { JSX } from 'react';

function SideMenu(): JSX.Element {
  return (
    <div className="flex flex-col w-64 bg-gray-200">
      <div className="p-4">
        <h1 className="text-xl font-bold">Menu</h1>
      </div>
      <ul className="flex flex-col p-4">
        <li className="py-2">Item 1</li>
        <li className="py-2">Item 2</li>
        <li className="py-2">Item 3</li>
        <li className="py-2">Item 4</li>
      </ul>
    </div>
  );
}

export default SideMenu;
