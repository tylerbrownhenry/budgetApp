import React from 'react';
import Button from './Button';

describe('Button Component', () => {
  it('exists', () => {
    expect(Button).toBeDefined();
  });

  it('returns something', () => {
    expect(Button()).toBeDefined();
  });
});
