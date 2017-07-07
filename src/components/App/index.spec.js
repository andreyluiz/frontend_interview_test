import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import App from '.';

chai.use(chaiEnzyme());

describe('<App />', () => {
  it('default render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').at(1).children().length).to.be.equal(3);
  });
});
