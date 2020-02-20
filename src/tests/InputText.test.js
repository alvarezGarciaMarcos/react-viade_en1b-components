
import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render, getByTestId, findByLabelText } from "@testing-library/react";

import InputText from '../components/InputText/InputText';

describe('Tests for the input', () => {


  test("The placeholder is the one it is supposed to be", () => {
    const input = render(<InputText placeholder = "Search"></InputText>)
    const i = input.getByTestId('input-field')
    expect(i).toBeVisible();
    
})


test("The placeholder text changes color with focus", () => {
  const input = render(<InputText placeholder="Search"></InputText>)
  expect(input.getByTestId('input-field')).toHaveAttribute('placeholder')
  expect(input.getByTestId('input-field')).not.toHaveFocus;
  expect(input.getByTestId('input-field')).toBeInTheDocument();
  
  
})
})
