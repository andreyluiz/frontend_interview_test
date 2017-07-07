import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import TypeBadge from '.';

chai.use(chaiEnzyme());

describe('<TypeBadge />', () => {
  it('default render', () => {
    const wrapper = shallow(<TypeBadge />);
    expect(wrapper.find('span')).to.have.text('Mieten');
  });

  it('test purpose prop', () => {
    const kaufen = shallow(<TypeBadge purpose={1} />);
    expect(kaufen.find('span')).to.have.text('Kaufen');

    const mieten = shallow(<TypeBadge purpose={0} />);
    expect(mieten.find('span')).to.have.text('Mieten');
  });
});
