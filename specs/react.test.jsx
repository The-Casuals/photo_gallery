import React from 'react';
import { shallow/* , mount, render */ } from 'enzyme';
// import Header from '../client/src/components/Header';
import App from '../client/src/components/App';

describe('App testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Header rendered lets go dood!', () => {
    expect(wrapper.find('Header')).toExist();
  });
  it('List rendered lets go my main man!', () => {
    expect(wrapper.find('List')).toExist();
  });
});

// describe('<Header />', () => {
//   it('should render without throwing an error', () => {
//     expect(shallow(<Header />).contains(<div className="title">Natus reiciendis similique ratione aspernatur minus.</div>)).toBe(true);
//     expect(shallow(<Header />).contains(<div className="rating">4.66</div>)).toBe(true);
//     expect(shallow(<Header />).contains(<div className="superhost">Superhost</div>)).toBe(true);
//     expect(shallow(<Header />).contains(<div className="location">New Cyril, Montana, Nauru</div>)).toBe(true);
//   });

  // it('should be selectable by class "header"', () => {
  //   expect(shallow(<Header />).is('.header')).toBe(true);
  // });

  // it('should mount in a full DOM', () => {
  //   expect(mount(<Header />).find('header').length).toBe(1);
  // });

  // it('should render to static HTML', () => {
  //   expect(render(<Header />).text()).toEqual('Natus reiciendis similique ratione aspernatur minus. 4.66 · Superhost · New Cyril, Montana, Nauru Share Save');
//   // });
// });
