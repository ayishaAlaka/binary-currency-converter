import React from 'react';
import { shallow } from "enzyme";
import App from "./App";
import Header from './components/header'

describe('Test App Entry point',  () => {
let component;

beforeEach(()=>{
   component = shallow(<App/>);
})

test('render App component',()=>{
  const div=component.find("div");
  expect(div).toHaveLength(1)
  expect(div.hasClass('App')).toBe(true)
})

test('render Header component',()=>{
  const div=component.find(Header);
  expect(div).toHaveLength(1)
})
})