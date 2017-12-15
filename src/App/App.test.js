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

let mockStore = {
  data: {
    firstName: "",
    lastName: "",
    favColor: ""
  },
  history: [],
  getState: state => state,
  subscribe: jest.fn()

}
let store = createStore(appReducer)

describe('Test App component', () => {
  it('matches the snapshot', () => {
    const app = render(<Provider store={store}><App /></Provider>)
    expect(app).toMatchSnapshot()
  });

  it('functions properly', () => {
    const app = shallow(<Provider store={store}><App /></Provider>)

    // const profile = app.dive().find(Profile)

    // expect(profile).toEqual('foo')
    // console.log('content', content)
    // const button = app.find(".save-button")
    // console.log(button)

    // button.simulate("click")
  });
})