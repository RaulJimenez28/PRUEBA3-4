import React from 'react'
import ReactDOM from 'react-dom/client'
import { JugadoresApp } from './JugadoresApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JugadoresApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
