import React from 'react';
import { shallow, mount} from 'enzyme';

import Clear from './Clear';

describe('<Reset />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Clear />);
  });

  // check if callback gets called on click event
  it('Should call resetGame callback when button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<Clear resetGame={callback}/>);
    wrapper.find('button').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});