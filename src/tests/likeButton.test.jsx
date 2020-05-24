import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LikeButton from '../components/Feed/LikeButton';

describe('LikeButton', () => {
  it('should change icon when it is clicked', () => {
    const { getByRole } = render(<LikeButton />);

    const icon = getByRole('img', { hidden: true });
    expect(icon).toHaveAttribute('data-prefix', 'far');

    fireEvent.click(icon);
    expect(icon).toHaveAttribute('data-prefix', 'fas');
  });

  it('should render with correct icon when liked prop is passed', () => {
    const { getByRole } = render(<LikeButton liked />);

    const icon = getByRole('img', { hidden: true });
    expect(icon).toHaveAttribute('data-prefix', 'fas');
  });

  it('should call handleOnClick prop when icon is clicked', () => {
    const handleOnClick = jest.fn();
    const { getByRole } = render(<LikeButton handleOnClick={handleOnClick} />);

    const icon = getByRole('img', { hidden: true });
    fireEvent.click(icon);

    expect(handleOnClick).toHaveBeenCalled();
  });
});
