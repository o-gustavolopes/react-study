import React from 'react';
import Calculadora from './calculadora';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Calculadora', () => {
  
  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculadora />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('deve limpar o campo de numeros', () => {
    const { getByText, getByTestId } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });

  it('deve somar 2 + 3 e obter 5', () => {
    const { getByText, getByTestId } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  })

  it('deve subtrair 2 - 3 e obter -1', () => {
    const { getByText, getByTestId } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('-1');
  })

  it('deve dividir 6 / 3 e obter 2', () => {
    const { getByText, getByTestId } = render(<Calculadora />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  })

  it('deve multiplicar 2 * 3 e obter 6', () => {
    const { getByText, getByTestId } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('6');
  })

  it('deve somar 2.5 + 3 e obter 5.5', () => {
    const { getByText, getByTestId } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.5');
  })


});
