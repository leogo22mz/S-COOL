import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './components/Form';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LandingPage from './pages/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBarDropdown from './components/TopBarDropdown';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterPage></RegisterPage>
  </React.StrictMode>
);

reportWebVitals();
