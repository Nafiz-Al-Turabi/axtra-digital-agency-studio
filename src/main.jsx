import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { ThemeProvider } from './Provider/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=''>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  </React.StrictMode>,
)
