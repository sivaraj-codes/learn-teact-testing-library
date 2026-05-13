// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import {createRoot} from 'react-dom/client'
// 🐨 import the `render` and `fireEvent` utilities from '@testing-library/react'
import Counter from '../../components/counter'
import {fireEvent, render} from '@testing-library/react'

// NOTE: this is a new requirement in React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
// 💣 so you can now delete this!

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 swap createRoot and root.render with React Testing Library's render
  // Note that React Testing Library's render doesn't need you to pass a `div`
  // so you only need to pass one argument. render returns an object with a
  // bunch of utilities on it. For now, let's just grab `container` which is
  // the div that React Testing Library creates for us.
  // 💰 const {container} = render(<Counter />)
  const {container} = render(<Counter />)
  console.log('container cnt', container.innerHTML)
  // 🐨 instead of `div` here you'll want to use the `container` you get back
  // from React Testing Library
  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')

  // expect(message.textContent).toBe('Current count: 0')
  //for More specific Error context we can use Jest
  expect(message).toHaveTextContent('Current count: 0')

  // 🐨 replace the next two statements with `fireEvent.click(button)`
  // 💰 note that you can remove `act` completely!

  fireEvent.click(increment)
  // expect(message.textContent).toBe('Current count: 1')
  expect(message).toHaveTextContent('Current count: 1')
  fireEvent.click(decrement)
  // expect(message.textContent).toBe('Current count: 0')
  expect(message).toHaveTextContent('Current count: 0')
})
