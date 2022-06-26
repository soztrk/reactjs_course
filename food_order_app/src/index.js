import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { CartContextProvider } from './store/CartContext';
import { AlertContextProvider } from './store/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <AlertContextProvider>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </AlertContextProvider>
    )
