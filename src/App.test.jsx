import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, expect, test } from 'vitest';
import App from './App.jsx';

/** @type {Array<[string, string]>} */
const routes = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact Us'],
];

beforeEach(() => {
  window.history.replaceState({}, '', '/');
});

afterEach(() => {
  window.history.replaceState({}, '', '/');
});

/** @param {string} name */
function expectActiveNavLink(name) {
  const currentLink = screen.getByRole('link', { name });
  expect(currentLink).toHaveClass('nav-links', 'active');
  expect(currentLink).toHaveAttribute('aria-current', 'page');

  const navLinks = screen.getAllByRole('link').filter(link =>
    link.classList.contains('nav-links'),
  );
  expect(navLinks).toHaveLength(4);
  for (const link of navLinks) {
    if (link !== currentLink) {
      expect(link).not.toHaveClass('active');
      expect(link).not.toHaveAttribute('aria-current');
    }
  }
}

/** @param {HTMLElement} container */
function getMenuToggle(container) {
  const toggle = container.querySelector('.nav-icon');
  if (!toggle) {
    throw new Error('The menu toggle was not found.');
  }
  return toggle;
}

test.each(routes)('renders %s with its navigation link active', (path, heading) => {
  window.history.replaceState({}, '', path);
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: heading })).toHaveAttribute('href', path);
  expectActiveNavLink(heading);
});

test('toggles the responsive menu and preserves its existing icon order', async () => {
  const user = userEvent.setup();
  const { container } = render(<App />);
  const menu = screen.getByRole('list');
  const toggle = getMenuToggle(container);

  expect(menu).toHaveClass('nav-menu');
  expect(menu).not.toHaveClass('active');
  expect(toggle.querySelector('path[fill="currentColor"]')).toBeInTheDocument();

  await user.click(toggle);
  expect(menu).toHaveClass('nav-menu', 'active');
  expect(toggle.querySelector('path[stroke="currentColor"]')).toHaveAttribute(
    'd', 'M3 17h18M3 12h18M3 7h18',
  );

  await user.click(toggle);
  expect(menu).not.toHaveClass('active');
  expect(toggle.querySelector('path[fill="currentColor"]')).toBeInTheDocument();
});

test('navigates through all four links and closes the open menu after each click', async () => {
  const user = userEvent.setup();
  const { container } = render(<App />);
  const menu = screen.getByRole('list');
  const toggle = getMenuToggle(container);

  // Return home last so the root link's exact matching is checked after navigation.
  for (const [path, heading] of [...routes.slice(1), routes[0]]) {
    await user.click(toggle);
    expect(menu).toHaveClass('active');
    await user.click(screen.getByRole('link', { name: heading }));

    expect(window.location.pathname).toBe(path);
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
    expectActiveNavLink(heading);
    expect(menu).not.toHaveClass('active');
  }
});
