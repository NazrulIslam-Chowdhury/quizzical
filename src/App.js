import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './compnents/home/Home';
import YourTopics from './compnents/topics/YourTopics';
import Statistics from './compnents/statistics/Statistics';
import Blog from './compnents/blog/Blog';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <YourTopics></YourTopics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <h1 className='text-4xl font-bold mt-8'>Page not found</h1>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
