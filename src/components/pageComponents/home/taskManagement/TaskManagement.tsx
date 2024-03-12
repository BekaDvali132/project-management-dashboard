import { JSX, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Group } from '@mantine/core';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { todoInterface } from '../../../../interfaces/Interfaces.ts';
import TaskList from './components/TaskList.tsx';

function TaskManagement(): JSX.Element {
  const [todos, setTodos] = useState<todoInterface[]>(useLoaderData() as todoInterface[]);

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over?.id === 'completed' || event.over?.id === 'todo') {
      setTodos((prev) => {
        const newTodos = [...prev];
        const todo = newTodos.find((t) => t.id === event.active.id);
        if (todo) {
          todo.completed = event.over?.id === 'completed';
        }
        return newTodos;
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Group gap="md" align="top" className="max-w-full" preventGrowOverflow>
        <TaskList
          completed={false}
          todos={todos.filter((todo) => !todo.completed)}
        />
        <TaskList
          completed
          todos={todos.filter((todo) => todo.completed)}
        />
      </Group>
    </DndContext>
  );
}

export default TaskManagement;
