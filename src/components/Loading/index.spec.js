import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Loading from '.';

chai.use(chaiEnzyme());

describe('<Loading />', () => {
  it('default render', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find('span')).to.have.text('Loading...');
  });
});
