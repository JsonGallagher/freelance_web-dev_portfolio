/**
 * main.jsx
 * 
 * Entry point for the React application.
 * This file mounts our App component to the DOM.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Mount the application to the #root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
