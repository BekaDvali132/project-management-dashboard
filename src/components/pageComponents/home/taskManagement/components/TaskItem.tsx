import { Card } from '@mantine/core';
import { JSX } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { todoInterface } from '../../../../../interfaces/Interfaces.ts';

interface Props {
  todo: todoInterface
}
export default function TaskItem({ todo }: Props):JSX.Element {
  const {
    attributes, listeners, setNodeRef, transform,
  } = useDraggable({
    id: todo.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <Card className="p-5 rounded-xl" ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {todo.title}
    </Card>
  );
}
