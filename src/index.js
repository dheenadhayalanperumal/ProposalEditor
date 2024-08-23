import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap 5 CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>  {/* Wrap your app in a Router */}
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
