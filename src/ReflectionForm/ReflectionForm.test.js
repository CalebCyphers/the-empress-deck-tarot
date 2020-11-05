import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReflectionForm from './ReflectionForm';

describe('ReflectionForm', () => {
    const mockCard =  {
        "id": 17,
        "reversed": true,
        "numeral": "VIII",
        "title": "The Wizard",
        "image": "https://i.imgur.com/dleRt8q.jpg",
        "theme": "Analysis Paralysis",
        "description": "Presented with too many options or paths, you may find yourself paralyzed with uncertainty. Concentrate on your main goal and don’t be afraid to step outsideof your comfort zone totake a risk."
    }
    const mockUpdateState = jest.fn();
    const mockEntries = [];

    it('should render a reflection form', () => {
        
        render(
            <ReflectionForm journalEntries={mockEntries} updateState={mockUpdateState} card={mockCard}/>
        )
        expect(screen.getByText('Submit')).toBeInTheDocument()
        expect(screen.getByRole('textbox', { name: /put your own personal reflections here/i })).toBeInTheDocument()
    })
})