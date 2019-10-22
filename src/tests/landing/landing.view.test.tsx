import React from 'react';
import ReactDOM from 'react-dom';
import LandingView from '../../components/landing/landing.view';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingView />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*
it('landing view matches snapshot', () => {
  const landing = renderer.create(<LandingView />).toJSON();
  expect(landing).toMatchSnapshot();
});
*/