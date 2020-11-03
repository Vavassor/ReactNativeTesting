import React from 'react';
import {Card} from '../Card';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Card icon={1} title="Test" type="NUMBER" />);
});
