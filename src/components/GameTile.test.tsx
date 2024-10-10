import React from 'react'
import { render, screen } from '@testing-library/react'
import GameTile from './GameTile';
import { MemoryRouter } from 'react-router-dom';

describe('GameTile', () => {
    it('should render title properly', () => {
        let gameInfo = {
                id: 1,
                image_url: 'test_url',
                title: 'test title'
        };
        render(<MemoryRouter><GameTile gameInfo={gameInfo}/></MemoryRouter>)

        expect(screen.getByText('test title')).toBeEnabled();
    });
})