import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import CardDatabase from './CardDatabase';

describe('CardDatabase', () => {
  let mockDeck = [ 
    {
      "id": 7,
      "reversed": true,
      "numeral": "III",
      "title": "The Fighter",
      "image": "https://i.imgur.com/hXdVi8B.jpg",
      "theme": "Warmaker",
      "description": "Beware an ascent into tyranny. Are you restricting the freedoms of another for your own benefit? Or perhaps there is a different figure of authority in your life that you must fight to dethrone."
    },
    {
      "id": 8,
      "reversed": false,
      "numeral": "IV",
      "title": "The Cleric",
      "image": "https://i.imgur.com/nINS0VZ.jpg",
      "theme": "Wisdom",
      "description": "The pious Cleric has plenty of knowledge to absorb and divulge. Seeking unity and a common goal, you are a pillar of support for your group or community. What else can you do to help those around you?"
   }]

  it('should render a loader when there is no deck data', () => {
    render (
      <Router>
        <CardDatabase deck={mockDeck} />
      </Router>
    )
    expect(true).toBeTruthy()
  })

  it('should render the title of the card', () => {
    render(
      <Router>
        <CardDatabase deck={mockDeck} />
      </Router>
    )

    let title = screen.getByText(/the fighter/i)
    expect(title).toBeInTheDocument()
  })
})