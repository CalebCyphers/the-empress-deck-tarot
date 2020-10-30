import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import "jest-environment-jsdom-sixteen";
import App from './App';
jest.mock('./apiCalls.js');

describe('App', () => {
  it('should get a random card', async () => {
    getRandomCard.mockResolvedValue({card: {
        "id": 40,
        "reversed": false,
        "numeral": "XX",
        "title": "The Dragon",
        "image": "https://i.imgur.com/poQ2dmX.jpg",
        "theme": "Abundance",
        "description": "The Dragon symbolizes fertility and abundance. Take stock of the bounty that surrounds you and be grateful for what you have, for genuine appreciation will bring more good things into your life."
        }
    })
    render (
      <App/>
    )
    expect(getRandomCard).toHaveBeenCalledTimes(1)
    const cardTitle = await waitFor(() => screen.getByText("The Dragon"));

    expect(cardTitle).toBeInTheDocument();
  })
})
