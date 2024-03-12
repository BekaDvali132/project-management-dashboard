import {
  Badge, Container, Text,
} from '@mantine/core';
import { JSX } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { todoInterface } from '../../../../../interfaces/Interfaces.ts';
import TaskItem from './TaskItem.tsx';

interface Props {
  completed: boolean
  todos: todoInterface[]
}

export default function TaskList({ completed, todos }: Props):JSX.Element {
  const { isOver, setNodeRef } = useDroppable({
    id: completed ? 'completed' : 'todo',
  });

  const style = {
    border: isOver ? '3px solid #5030E5' : '3px solid transparent',
  };
  return (
    <Container w={454} bg="#F5F5F5" className="rounded-xl p-5 flex flex-col gap-5 duration-300 ease-out" ref={setNodeRef} style={style}>
      <div className="flex gap-2 items-center">
        <div className="w-2 h-2 bg-[#5030E5] rounded-full" />
        <Text>{completed ? 'Completed' : 'To Do'}</Text>
        <Badge size="sm" circle bg="gray">
          {todos.length}
        </Badge>
      </div>
      <div className="w-full h-1 bg-[#5030E5]" />
      {todos?.map((todo: todoInterface) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
}
