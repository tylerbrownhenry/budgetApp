import React from 'react';
import Button from './Button';

describe('Button Component', function() {
  
    it('exists', function() {
        expect(Button).toBeDefined();
    });

    it('returns something', function() {
        expect(Button()).toBeDefined();
    });

});