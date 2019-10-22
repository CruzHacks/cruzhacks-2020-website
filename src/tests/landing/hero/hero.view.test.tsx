
import React from 'react';
import ReactDOM from 'react-dom';
import HeroView from '../../../components/landing/hero/hero.view';

import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroView />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*
it('hero view matches snapshot', () => {
  const hero = renderer.create(<HeroView />).toJSON();
  expect(hero).toMatchSnapshot();
});
*/