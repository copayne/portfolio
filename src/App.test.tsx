import { describe, it, expect } from 'vitest';
import { render, screen } from './test/utils';
import App from './App';

describe('App', () => {
  it('renders the portfolio content', () => {
    render(<App />);

    expect(screen.getByText('Developer Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument();
    expect(
      screen.getByText(/Ready for portfolio content development/)
    ).toBeInTheDocument();
  });

  it('has the correct layout structure', () => {
    const { container } = render(<App />);
    const layoutElement = container.firstChild;

    expect(layoutElement).toHaveClass('layout');
  });

  it('renders navigation links', () => {
    render(<App />);

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders footer content', () => {
    render(<App />);

    expect(
      screen.getByText(/Built with React \+ TypeScript \+ Vite/)
    ).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('Terms')).toBeInTheDocument();
  });
});
