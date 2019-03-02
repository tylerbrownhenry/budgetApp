import React from 'react';
import Button from './Button';

describe('Button Component', function() {
  it('Exists', function() {
    expect(Button).toBeDefined();
  });
  it('Return Something', function() {
    expect(Button()).toBeDefined();
  });
});