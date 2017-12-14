import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

describe('Test Header component', () => {
    it('should render', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    });

    it('should render with name', () => {
        const div = document.createElement('div');
        expect(ReactDOM.render(<Header name="Lester" />, div)).toMatchSnapshot()
    });
});