import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './button';

test('first react test case',()=>{
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeInTheDocument()
})

describe('test Button components',()=>{
  it('should render correct default button',()=>{
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element?.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })

  it('should render correct components based on different props',()=>{

  })
  it('should render a link when btnType equals link and href is provided',()=>{

  })

  it('should render disabled button when disabled set to true',()=>{

  })
})