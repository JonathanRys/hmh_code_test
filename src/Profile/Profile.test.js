import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

const onClick = jest.fn();

describe('Test Profile component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Profile />, div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        expect(ReactDOM.render(<Profile onClick={onClick} />, div)).toMatchSnapshot()
    });
});
