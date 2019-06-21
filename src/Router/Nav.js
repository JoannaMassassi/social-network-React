import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../Router/Routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LOG_IN}>Log In</Link>
      </li>
      <li>
        <Link to={ROUTES.WALL}>Home</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;