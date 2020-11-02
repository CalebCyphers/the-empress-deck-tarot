import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { fetchCards } from '../fetch/fetch-requests';
jest.mock('../fetch/fetch-requests');

describe('App', () => {


  it('should render a loader when there is no deck data', () => {
    fetchCards.mockResolvedValueOnce(undefined)
    render (
      <App/>
    )
    // test that once loader componenent has been am
    expect(screen.getByText('Loading...')).toBeInTheDocument()

  })

  it('should render a random card reading when it has deck data', async () => {
    fetchCards.mockResolvedValueOnce([  
      {
        "id": 1,
        "reversed": true,
        "numeral": "O",
        "title": "The Bard",
        "image": "https://i.imgur.com/QBKZRaT.jpg",
        "theme": "Recklessness",
        "description": "Now is the time to start something new, even if you are unsure of the outcome. Trust in your performance, but also take time to make sure that you are well prepared."
      }
    ])

    render(
      <App />
    )
    const cardName = await waitFor(() => screen.getByText('The Bard (reversed)'));
    expect(cardName).toBeInTheDocument();

  })
})
