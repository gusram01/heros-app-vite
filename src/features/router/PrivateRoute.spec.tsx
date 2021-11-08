import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import { render } from '../../tests/test-utils';

import PrivateRoute from './PrivateRoute';

import '@testing-library/jest-dom';

describe('Private Route', () => {
  it('should render the component passed into props', () => {
    render(
      <PrivateRoute isAuthenticated component={() => <h1>Test</h1>} />,
      // @ts-expect-error
      { wrapper: MemoryRouter }
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should not render private route component and redirect to login page', () => {
    render(
      <PrivateRoute isAuthenticated={false} component={() => <h1>Test</h1>} />,
      // @ts-expect-error
      { wrapper: MemoryRouter }
    );

    expect(screen.queryByText('Test')).not.toBeInTheDocument();
  });
});
