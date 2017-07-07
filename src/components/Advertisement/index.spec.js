import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Advertisement from '.';

chai.use(chaiEnzyme());

describe('<Advertisement />', () => {
  it('default render', () => {
    const wrapper = shallow(<Advertisement />);
    const image = wrapper.find('div').at(1);
    expect(image.find('img')).to.not.have.attr('src');
  });

  it('test thumbnail prop', () => {
    const wrapper = shallow(<Advertisement thumbnail="house.jpg" />);
    const image = wrapper.find('div').at(1);
    expect(image.find('img')).to.have.attr('src', 'house.jpg');
  });

  // Since this component just pass down the other props to the child
  // components, those props will not be tested here (see Info and TypeBadge).
});
