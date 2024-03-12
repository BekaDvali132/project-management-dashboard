import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/ui/layout/Layout.tsx';
import Error from './pages/Error.tsx';
import { getTodosService } from './service/services/todoServices.ts';
import Home from './pages/home/index.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [{
        index: true,
        loader: getTodosService,
        element: <Home />,
      }],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
