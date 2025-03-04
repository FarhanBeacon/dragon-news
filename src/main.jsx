import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Router from './Routers/Router';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
