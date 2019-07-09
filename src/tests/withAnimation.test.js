import React from 'react';
import { configure , shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Block from '../Block/Block';

configure({
  adapter: new Adapter()
});

const getShallowComponent = (props) => shallow(<Block {...props} />);

describe('withAnimation', () => {
  it('should render the Block component with the correct props', () => {
      const defaultClass = 'wrapper-class';
      const wrapper = getShallowComponent({
        mount: true,
        defaultClass
      });

      expect(wrapper).not.toBe(null);
      expect(wrapper.find('div').hasClass(defaultClass)).toBe(true);
  });

  it('should not render the Block component', () => {
    const wrapper = getShallowComponent({
      mount: false,
      animateOnLoad: false
    });

    const wrapper2 = getShallowComponent({
      mount: false,
      animateOnLoad: true
    });

    expect(wrapper.exists('div')).toEqual(false);
    expect(wrapper2.exists('div')).toEqual(false);
  });
});
