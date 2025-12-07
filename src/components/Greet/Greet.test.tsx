import { render, screen } from "@testing-library/react"
import Greet from "./Greet"
import { text } from "stream/consumers";

describe('Greet', () => {
    test('Greet renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/greet/i);
        expect(textElement).toBeInTheDocument();
    });

    test('Greet with a name', () => {
        const name = 'Silvi';
        render(<Greet name={name} />);
        const textElement = screen.getByText(/greet Silvi/i);
        expect(textElement).toBeInTheDocument();
    });

})