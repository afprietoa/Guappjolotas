import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouter from './routers/AppRouter';


// Una vez se tiene la configuración lista y el store creado, 
//luego se debe llamar a ese store usando el provider en el componente principal el cual va a proveer esa store que se acaba de crear
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);


