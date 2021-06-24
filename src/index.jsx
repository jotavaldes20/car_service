import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import  App  from './routes/App';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);