import React from 'react';
import ReactDOM from 'react-dom';
import HeroView from '../components/landing/hero/hero.view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
