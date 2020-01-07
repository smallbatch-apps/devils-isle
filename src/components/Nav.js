import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import CategoryList from './CategoryList';

const Nav = props => {
  const isActiveCritters = props.location.pathname.substr(0, 8) === '/critter';

  return <div className="bg-orange w-full feature">
    <div className="md:flex mx-auto w-4/5 uppercase tracking-wide">
      <div className="flex-1 text-4xl p-2">
        Devil's Isle
      </div>
      <NavLink to="/" exact className="flex-shrink p-2 pb-5 md:p-5 md: hover:bg-orange-dark text-white no-underline"
        activeClassName="bg-orange-dark">Home</NavLink>
      <NavLink to="/about" className="flex-shrink p-2 pb-5 md:p-5 hover:bg-orange-dark text-white no-underline"
        activeClassName="bg-orange-dark">What is Devil's Isle</NavLink>
      <div className={`flex-shrink p-5 hover:bg-orange-dark relative cursor-pointer${isActiveCritters ? ' bg-orange-dark' : ''}`}>
        Animals

        <CategoryList />
      </div>
    </div>
  </div>
}

export default withRouter(Nav);