
import React from 'react';
import ReactDOM from 'react-dom';
import History from './History';


describe('Test History component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<History history={[]} />, div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        expect(ReactDOM.render(<History history={[{}, {
            firstName: "Lester",
            lastName: "Tester",
            startDate: "Today"
        }]} />, div)).toMatchSnapshot()
    });
})
