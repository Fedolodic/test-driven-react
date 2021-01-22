import React from 'react'; // Needed because we use JSX expressions, that compile to React.createElement statements
import { configure, shallow } from 'enzyme'; // Enzyme needs us to pass a React version-appropriate adapter to its configure function before we can use it
import Adapter from 'enzyme-adapter-react-16';
import CarouselButton from '../CarouselButton';

configure({ adapter: new Adapter() });

describe('CarouselButton', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<CarouselButton />); // Enzyme's shallow() method returns a shallow wrapper
    expect(wrapper.type()).toBe('button');
  });
});
