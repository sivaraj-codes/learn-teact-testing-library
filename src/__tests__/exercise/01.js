// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'
// NOTE: this is a new requirement in React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

beforeEach(() => {
  document.body.innerHTML = ''
})
test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)
  const root = createRoot(div)
  act(() => {
    root.render(<Counter />)
  })
  console.log('body', document.body.innerHTML)
  const [decrementBtn, incrementBtn] = div.querySelectorAll('button')
  const messageDiv = div.firstChild.querySelector('div')
  // console.log('hh', {
  //   messageDiv: messageDiv.textContent,
  //   decrementBtn,
  //   incrementBtn,
  // })
  expect(messageDiv.textContent).toBe('Current count: 0')
  act(() => {
    let incrementEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0,
    })
    incrementBtn.dispatchEvent(incrementEvent)
    // incrementBtn.click()
  })
  console.log('hh', {
    messageDiv: messageDiv.textContent,
  })
  expect(messageDiv.textContent).toBe('Current count: 1')
  act(() => {
    let decrementEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0,
    })
    decrementBtn.dispatchEvent(decrementEvent)
    // decrementBtn.click()
  })
  expect(messageDiv.textContent).toBe('Current count: 0')

  // 🐨 create a div to render your component to (💰 document.createElement)
  //
  // 🐨 append the div to document.body (💰 document.body.append)
  //
  // 🐨 use createRoot to render the <Counter /> to the div
  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  // 🐨 click the increment button (💰 act(() => increment.click()))
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 act(() => decrement.click()))
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

test('2 counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)
  const root = createRoot(div)
  act(() => {
    root.render(<Counter />)
  })
  console.log('body', document.body.innerHTML)
  const [decrementBtn, incrementBtn] = document.querySelectorAll('button')
  const messageDiv = div.firstChild.querySelector('div')
  // console.log('hh', {
  //   messageDiv: messageDiv.textContent,
  //   decrementBtn,
  //   incrementBtn,
  // })
  expect(messageDiv.textContent).toBe('Current count: 0')
  act(() => {
    incrementBtn.click()
  })
  console.log('hh', {
    messageDiv: messageDiv.textContent,
  })
  expect(messageDiv.textContent).toBe('Current count: 1')
  act(() => {
    decrementBtn.click()
  })
  expect(messageDiv.textContent).toBe('Current count: 0')

  // 🐨 create a div to render your component to (💰 document.createElement)
  //
  // 🐨 append the div to document.body (💰 document.body.append)
  //
  // 🐨 use createRoot to render the <Counter /> to the div
  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  // 🐨 click the increment button (💰 act(() => increment.click()))
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 act(() => decrement.click()))
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
