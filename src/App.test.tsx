import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders Vite + React heading', () => {
        render(<App />);
        const heading = screen.getByRole('heading', { name: /Vite \+ React/i });
        expect(heading).toBeInTheDocument();
    });

    // test('renders Vite logo link', () => {
    //     render(<App />);
    //     const viteLink = screen.getByAltText('Vite logo');
    //     expect(viteLink).toBeInTheDocument();
    //     expect(viteLink.closest('a')).toHaveAttribute('href', 'https://vite.dev');
    // });

    // test('renders React logo link', () => {
    //     render(<App />);
    //     const reactLink = screen.getByAltText('React logo');
    //     expect(reactLink).toBeInTheDocument();
    //     expect(reactLink.closest('a')).toHaveAttribute('href', 'https://react.dev');
    // });

    test('renders button with initial count 0', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is 0/i });
        expect(button).toBeInTheDocument();
    });

    test('increments count when button is clicked', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is 0/i });
        fireEvent.click(button);
        expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
    });

    test('renders edit instruction text', () => {
        render(<App />);
        expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    });

    test('renders read-the-docs paragraph', () => {
        render(<App />);
        expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();
    });
});