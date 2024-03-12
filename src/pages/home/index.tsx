import { JSX } from 'react';
import HomeHeader from '../../components/pageComponents/home/HomeHeader.tsx';
import HomeFilters from '../../components/pageComponents/home/homeFilters/HomeFilters.tsx';
import TaskManagement from '../../components/pageComponents/home/taskManagement/TaskManagement.tsx';

function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-10 p-10">
      <HomeHeader />
      <HomeFilters />
      <TaskManagement />
    </div>
  );
}

export default Home;
