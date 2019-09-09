import React from 'react';
import ReactDOM from 'react-dom';
import StatView from '../.../../../components/landing/stat/stat.view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
