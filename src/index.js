import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/fireBaseCof';

const root = ReactDOM.createRoot(document.getElementById('root'));
onAuthStateChanged(auth, (user) => {
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    );
})
 




