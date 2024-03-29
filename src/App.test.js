import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'mutationobserver-shim'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Mutation Observer should be defined", () => {
  expect(window.MutationObserver).toBeDefined()
})