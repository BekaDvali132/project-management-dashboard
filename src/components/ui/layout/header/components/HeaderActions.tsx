/* eslint-disable import/no-unresolved */
import { JSX } from 'react';
import Calendar from '../../../../../assets/svgs/calendar.svg?react';
import Message from '../../../../../assets/svgs/message.svg?react';
import Notification from '../../../../../assets/svgs/notification.svg?react';

const headerActionClassname = 'opacity-75 duration-300 cursor-pointer hover:opacity-100';
function HeaderActions(): JSX.Element {
  return (
    <div className="flex gap-6 items-center">
      <Calendar className={headerActionClassname} />
      <Message className={headerActionClassname} />
      <Notification className={headerActionClassname} />
    </div>
  );
}

export default HeaderActions;
