import React from 'react';
import { shallow } from 'enzyme';
import Header from './header'

describe('Test App Entry point',  () => {
    let component;
    
    beforeEach(()=>{
       component = shallow(<Header/>);
    })
    
    test('Header component should',()=>{
      const div=component.find("header");
      expect(div).toHaveLength(1)
      expect(div.hasClass('navbar')).toBe(true)
    })

    test('render div element',()=>{
        const div=component.find("div");
        expect(div).toHaveLength(3)
      })
    
    })