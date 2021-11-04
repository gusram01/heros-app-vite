import { MemoryRouter } from 'react-router-dom';
import { fireEvent, waitFor, screen } from '@testing-library/react';

import { render } from '../../tests/test-utils';

import PrivateRoute from './PrivateRoute';

import '@testing-library/jest-dom';

describe('Private Route', () => {
  it('should render', () => {
    render(
      <PrivateRoute isAuthenticated={true} component={() => <h1>Test</h1>} />,
      //@ts-expect-error
      { wrapper: MemoryRouter }
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
