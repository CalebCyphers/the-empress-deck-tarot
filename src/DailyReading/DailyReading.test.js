import React from 'react';
import { render, screen, waitForgit } from '@testing-library/react';
import '@testing-library/jest-dom';
import DailyReading from './DailyReading';

describe('DailyReading', () => {
  let mockCard = {
    "id": 0,
    "reversed": false,
    "numeral": "O",
    "title": "The Bard",
    "image": "https://i.imgur.com/QBKZRaT.jpg",
    "theme": "New Experiences",
    "description": "The carefree Bard symbolizes the beginning of a new adventure. Perhaps you are learning something new, meeting new people, or looking at a challenge with a newfound perspective."
    }

  let mockCardReversed = {
    "reversed": true,
    "image": "https://i.imgur.com/QBKZRaT.jpg",
    "title": "The Bard",
    }

    beforeEach(() => {
      render(
        <DailyReading card={mockCard} />
        )
    })


    it('should display a card', () => {
      let cardImg = screen.getByRole('img', { name: /the bard/i })
        expect(cardImg).toBeInTheDocument()
    })

    it('Should adjust the title if the card is reversed', () => {
      render(
        <DailyReading card={mockCardReversed} />
        )
      let reversedText = screen.getByRole('heading', { name: /the bard \(reversed\)/i })
      expect(reversedText).toBeInTheDocument()
    })

    it('Should display the cards Title', () => {
        let titleText = screen.getByRole('heading', { name: /the bard/i })
        expect(titleText).toBeInTheDocument()
    })

    it('Should display the cards numeral', () => {
      let numeral = screen.getByRole('heading', { name: /O/i })
      expect(numeral).toBeInTheDocument()
  })

    it('Should display the cards theme', () => {
      let cardTheme = screen.getByRole('heading', { name: /new experiences/i })
      expect(cardTheme).toBeInTheDocument()
    })

    it('Should display the cards description', () => {
      let cardTheme = screen.getByText(/The carefree Bard symbolizes the beginning of a new adventure. Perhaps you are learning something new, meeting new people, or looking at a challenge with a newfound perspective./i)
      expect(cardTheme).toBeInTheDocument()
    })
})