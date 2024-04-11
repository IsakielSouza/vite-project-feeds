import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { Auth } from './pages/auth/index.tsx';
import { Feed } from './pages/feed.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Feed />
  </React.StrictMode>,
)
