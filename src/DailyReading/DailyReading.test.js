import React from 'react';
import { render, screen, waitForgit } from '@testing-library/react';
import '@testing-library/jest-dom';
import DailyReading from './DailyReading';

// describe('DailyReading', () => {
//     it('should return an upright card', () => {
//         const mockCard = jest.fn()
//         props.card = mockCard.mockResolvedValueOnce({
//                 "id": 0,
//                 "reversed": false,
//                 "numeral": "O",
//                 "title": "The Bard",
//                 "image": "https://i.imgur.com/QBKZRaT.jpg",
//                 "theme": "New Experiences",
//                 "description": "The carefree Bard symbolizes the beginning of a new adventure. Perhaps you are learning something new, meeting new people, or looking at a challenge with a newfound perspective."
//             })

        
//         render(
//             <DailyReading />
//         )

//         const reverseText = screen.getByText('(reversed)')
//         // mock the prop card with a non reverse card
//         // expect reversed not to be displayed
//         expect(reverseText).toBeNull()
//     })

//     it('should return a reversed card', () => {
//         props.card.mockResolvedValueOnce([
//             {
//                 "id": 1,
//                 "reversed": true,
//                 "numeral": "O",
//                 "title": "The Bard",
//                 "image": "https://i.imgur.com/QBKZRaT.jpg",
//                 "theme": "Recklessness",
//                 "description": "Now is the time to start something new, even if you are unsure of the outcome. Trust in your performance, but also take time to make sure that you are well prepared."
//             }
//         ])

//         render(
//             <DailyReading />
//         )

//         const reverseText = screen.getByText('(reversed)')

//         expect(reverseText).toBeInTheDocument()
//         // mock the prop cared with a reverse card
//         // expect (reversed) text to be displayed
//     })
// })