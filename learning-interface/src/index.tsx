import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App';

// Enable better error handling in development mode
if (process.env.NODE_ENV === 'development') {
  // Error boundary for development
  const originalConsoleError = console.error;
  console.error = (...args) => {
    // Filter out certain React-specific warnings
    if (
      typeof args[0] === 'string' && 
      (
        args[0].includes('Warning:') ||
        args[0].includes('React does not recognize the')
      )
    ) {
      return;
    }
    originalConsoleError(...args);
  };
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App initialized
