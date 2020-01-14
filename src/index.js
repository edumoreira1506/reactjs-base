import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes';
import { withTemplate } from './helpers/template';

ReactDOM.render(withTemplate(<Routes />), document.getElementById('root'));
