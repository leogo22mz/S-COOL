import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './components/RegisterForm';
import LandingPage from './pages/LandingPage/LandingPage';
import TopBarDropdown from './components/TopBarDropdown';
import LogIn from './pages/LogIn/LogIn';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

reportWebVitals();
