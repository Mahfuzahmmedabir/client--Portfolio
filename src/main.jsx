import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.jsx';
import { PrimeReactProvider } from 'primereact/api';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider >


    <RouterProvider router={router}></RouterProvider>
    </PrimeReactProvider>
  </StrictMode>
);
