import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

//isso aqui pode ser nulo, ponte de !  
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
