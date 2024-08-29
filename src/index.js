import ReactDOM from 'react-dom/client';
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./Views/Home/home"
import About from "./Views/About/about"
import Contact from "./Views/Contact/contact"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/cbout',
    element: <About/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
])

root.render(<RouterProvider router={router}/>)
