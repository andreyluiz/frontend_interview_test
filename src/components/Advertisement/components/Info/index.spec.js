import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Info from '.';

console.log(process.env.NODE_ENV);

chai.use(chaiEnzyme());

describe('<Info />', () => {
  it('default render', () => {
    const wrapper = shallow(<Info />);
    console.log(wrapper.html());
  });
});
