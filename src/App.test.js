import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("ugly", () => {
  expect(4).toBe(4);
});

test("failing", () => {
  expect(4).toBe(4);
});
