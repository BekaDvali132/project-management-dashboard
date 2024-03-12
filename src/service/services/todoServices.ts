import { todoInterface } from '../../interfaces/Interfaces.ts';

export async function getTodosService(): Promise<todoInterface[]> {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((json) => json.slice(0, 10));
}

export async function getTodoService(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.json())
    .then((json) => json.slice(0, 10));
}
