import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from '../reducers/app-reducer'

import { render, shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter })

const onClick = jest.fn()

const mockData = {
  data: {
    firstName: "",
    lastName: "",
    favColor: ""
  },
  history: [],
  onClick: onClick
}

const store = createStore(appReducer)

describe('Test App component', () => {
  it('matches the snapshot', () => {
    const app = render(<Provider store={store}><App /></Provider>)
    expect(app).toMatchSnapshot()
  });

  it('functions properly', () => {
    const app = shallow(<App store={store} {...mockData} />)
    const content = app.dive().first().find(".content")
    const profile = content.children().first().first()
    const button = profile.dive().last().find(".save-button")
    button.simulate("click")

    // expect(onClick).toBeCalledWith(mockData)
  });
})