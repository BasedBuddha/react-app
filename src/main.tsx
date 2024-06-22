import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navbar } from './Navbar/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
)
/*
ReactDOM.hydrateRoot(document.querySelector('#body')).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
)
  */
