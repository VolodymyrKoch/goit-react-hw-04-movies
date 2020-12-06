import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './bases.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
