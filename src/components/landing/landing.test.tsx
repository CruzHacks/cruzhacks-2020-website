import React from 'react';
import ReactDOM from 'react-dom';
import LandingViews from './landing.views';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingViews />, div);
  ReactDOM.unmountComponentAtNode(div);
});
