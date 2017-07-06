import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import App from '.';

chai.use(chaiEnzyme());

describe('<App />', () => {
  it('default render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.text('Hello!');
  });
});
