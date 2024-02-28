export async function getTodosService() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((json) => json.slice(0, 10));
}
