import React from 'react'
import ReactDOM from 'react-dom/client'
import { PostApp } from './PostsApp.jsx'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostApp />
  </React.StrictMode>,
)
