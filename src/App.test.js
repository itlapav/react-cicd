test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Pavan Itla/i);
  expect(linkElement).toBeInTheDocument();
});
