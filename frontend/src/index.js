import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { JobsContextProvider } from './context/JobsContext';
import { NotesContextProvider } from './context/NotesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JobsContextProvider>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </JobsContextProvider>
  </React.StrictMode>
)