import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import { render, shallow } from 'enzyme'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter })

const mockData = {
    data: {
        firstName: "Lester",
        lastName: "Tester",
        favColor: "Beige"
    }
}

const mockOnClick = data => {
    expect(data).toEqual(mockData)
}

describe('Test Profile component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Profile />, div);
    });

    it('passes a snapshot test', () => {
        const profile = render(<Profile onClick={mockOnClick} />)
        expect(profile).toMatchSnapshot()
    });

    it('saves data from inputs', () => {
        const profile = shallow(<Profile onClick={mockOnClick} />)
        const inputs = profile.find("input")
        const button = inputs.find('.save-button')

        const firstNameInput = inputs.at(0)
        const lastNameInput = inputs.at(1)
        const favColorInput = inputs.at(2)

        firstNameInput.simulate("blur", { target: { name: "firstName", value: "Lester" } })
        lastNameInput.simulate("blur", { target: { name: "lastName", value: "Tester" } })
        favColorInput.simulate("blur", { target: { name: "favColor", value: "Beige" } })

        button.simulate("click")
    })
});
