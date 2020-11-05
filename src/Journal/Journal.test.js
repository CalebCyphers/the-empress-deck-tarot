import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import Journal from './Journal';

describe('Journal', () => {
    const mockJournalEntries = [
        {
            "id":1604530886486,
            "text":"This makes so much sense! I have been so sharp with my words in the most manipulative way. I really want to change this behavior. I will do my best! Thank you Aliens!",
            "card":{
                "id":31,
                "reversed":true,
                "numeral":"XV",
                "title":"The Artificer",
                "image":"https://i.imgur.com/yXotwLH.jpg",
                "theme":"Destruction",
                "description":"Progress should not come at the expense of morality. Be careful you do not use your intellect to harm others. You may feel powerful with your arsenal of weapons, but at the cost of peace with those around you."
            }
        },
        {
            "id":1604533333486,
            "text":"I'm worried, I didn't know the characters in these cards were real and could get me!",
            "card":{
                "id":34,
                "reversed":true,
                "numeral":"XVI",
                "title":"The Princess of Purge",
                "image":"https://i.imgur.com/yXotwLH.jpg",
                "theme":"Destruction",
                "description":"The Princess is going to get you."
            }
        }
    ]

    it('should render journal entries', () => {

        render(
            <Journal journalEntries={mockJournalEntries}/>
        )
        expect(screen.getByText("I'm worried, I didn't know the characters in these cards were real and could get me!")).toBeInTheDocument();
    })
})