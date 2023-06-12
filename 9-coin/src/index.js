import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Company from './pages/Company';
import NewProjects from './pages/NewProjects';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,

    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contacts",
        element: <Contacts/>
      },
      {
        path: "company",
        element: <Company/>
      },
      {
        path: "newprojects",
        element: <NewProjects/>
      },
    ]

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
