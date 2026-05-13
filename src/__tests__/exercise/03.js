// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
// 🐨 add `screen` to the import here:
import {render, fireEvent, screen} from '@testing-library/react'
import Counter from '../../components/counter'
import userEvent from '@testing-library/user-event'

test('counter increments and decrements when the buttons are clicked', async () => {
  const {container} = render(<Counter />)
  // 🐨 replace these with screen queries
  // 💰 you can use `getByText` for each of these (`getByRole` can work for the button too)
  const decrement = screen.getByRole('button', {name: /decrement/i})
  const increment = screen.getByRole('button', {name: /increment/i})
  // const [decrement, increment] = container.querySelectorAll('button')
  const message = screen.getByText(/current count/i)
  // const message = container.firstChild.querySelector('div')
  console.log('mess', message.textContent)
  expect(message).toHaveTextContent('Current count: 0')
  // fireEvent.click(increment)
  await userEvent.click(increment)
  console.log('mess-inc', message.textContent)

  // console.log('mess2', message.textContent)

  expect(message).toHaveTextContent('Current count: 1')
  await userEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
