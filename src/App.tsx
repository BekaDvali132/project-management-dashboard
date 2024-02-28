import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/ui/layout/Layout.tsx';
import Error from './pages/Error.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
