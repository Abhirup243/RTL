import { render, screen } from "@testing-library/react"
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe('Counter', () => {
    test('Renders correctly', () => {
        render(<Counter />);
        const CountElement = screen.getByRole('heading');
        expect(CountElement).toBeInTheDocument();
        const incrementBtn = screen.getByRole('button', {
            name: /increment/i,
        });
        expect(incrementBtn).toBeInTheDocument();
    })

    test('Renders count as 0 by default', () => {
        render(<Counter />);
        const CountElement = screen.getByRole('heading');
        expect(CountElement).toHaveTextContent('0');
    });

    test('Increments count',async()=>{
        userEvent.setup();
        render(<Counter />);
     const incrementBtn = screen.getByRole('button', {
            name: /increment/i,
        });
        await userEvent.click(incrementBtn);
        const CountElement = screen.getByRole('heading');
        expect(CountElement).toHaveTextContent('1');

    })
})