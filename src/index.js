import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </StrictMode>
);
