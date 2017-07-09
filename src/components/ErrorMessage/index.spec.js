import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ErrorMessage from '.';

chai.use(chaiEnzyme());

describe('<ErrorMessage />', () => {
  it('default render', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper.find('span')).to.have.text('Unknown Error');
  });

  it('test children prop', () => {
    const wrapper = shallow(<ErrorMessage>There is an error</ErrorMessage>);
    expect(wrapper.find('span')).to.have.text('There is an error');
  });
});
