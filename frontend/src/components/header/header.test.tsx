import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './index';

describe('Header', () => {
    it('should render header with correct text', () => {
        render(<Header />);

        const headerText = screen.getByText('Show Me Money');

        expect(headerText).toBeInTheDocument();
    });
});
