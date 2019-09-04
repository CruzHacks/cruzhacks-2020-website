import React from 'react';
import ReactDOM from 'react-dom';
import LandingView from '../components/landing/landing.view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
