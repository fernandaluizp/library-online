import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('render button', ()=>  {
    const text = "input";

    it('with chosen text', () => {
        render(<Button  text={text} />);
        const linkElement = screen.getByRole('button');
        const action = linkElement.innerHTML;
        expect(action).toBe(text);
    });

    it('executes onClick function', () => {
        const onClick = jest.fn();
        render(<Button  text={text} onClick={onClick}/>);
        const linkElement = screen.getByRole('button');
        userEvent.click(linkElement);
        expect(onClick).toHaveBeenCalled();
    });
})
