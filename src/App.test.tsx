import React from 'react';
import { render } from '@testing-library/react';
import _ from 'lodash';
import App from './App';

test('renders days 0-11', () => {
  const { getByText } = render(<App />);
  const elements = _.times(11, day => getByText(`Day ${day}`));
  _.forEach(elements, element => expect(element).toBeInTheDocument());
});
