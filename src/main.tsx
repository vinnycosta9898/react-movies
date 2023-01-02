import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Header } from './components/Header';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Header/>
    <App />
  </React.StrictMode>,
)
