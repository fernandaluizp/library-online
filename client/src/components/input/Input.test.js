import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('render input', ()=>  {
    const text = "name";
    const placeholderText = "Insira o seu nome aqui";

    it('with right label text', () => {
        render(<Input  label={text} type="text" placeholder={placeholderText} />);
        const linkElement = screen.getByLabelText(text);
        expect(linkElement).toBeInTheDocument();
    });

    it('with right placeholder text', () => {
        render(<Input  label={text} type="text" placeholder={placeholderText} />);
        const linkElement = screen.getByPlaceholderText(placeholderText);
        expect(linkElement).toBeInTheDocument();
    });
})