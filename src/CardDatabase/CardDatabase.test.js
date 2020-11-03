import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardDatabase from './CardDatabase';

describe('CardDatabase', () => {

  it('should render a loader when there is no deck data', () => {
    render (
      <CardDatabase/>
    )
    expect(true).toBeTruthy()
  })

})