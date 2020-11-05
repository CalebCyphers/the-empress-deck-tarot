import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';
import { fetchCards } from '../fetch/fetch-requests';
import userEvent from '@testing-library/user-event';

jest.mock('../fetch/fetch-requests');

describe('App', () => {

  let mockData = [  
    {
      "id": 1,
      "reversed": true,
      "numeral": "O",
      "title": "The Bard",
      "image": "https://i.imgur.com/QBKZRaT.jpg",
      "theme": "Recklessness",
      "description": "Now is the time to start something new, even if you are unsure of the outcome. Trust in your performance, but also take time to make sure that you are well prepared."
    }
  ]


  it('should render a loader when there is no deck data', () => {
    fetchCards.mockResolvedValueOnce(undefined)
    render (
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render a random card reading when it has deck data', async () => {
    fetchCards.mockResolvedValueOnce(mockData)
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    const cardName = await waitFor(() => screen.getByText('The Bard'))
    expect(cardName).toBeInTheDocument();
  })

  it('should render the navbar', async () => {
    fetchCards.mockResolvedValueOnce(mockData)
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    let navbar = await waitFor(() => screen.getByText('My Journal'))
    expect(navbar).toBeInTheDocument()
  })
})
