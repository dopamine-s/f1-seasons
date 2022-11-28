import { Link, NavLink } from 'react-router-dom';

import logoImg from '../../images/logo-img.svg';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>F1 races results</h1>
      <Link className={classes.logo} to="/">
        <img
          src={logoImg}
          width="70"
          title="F1 Seasons App"
          alt="F1 Seasons App Logo"
        />
        <span>F1 Racing</span>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/"
            >
              Seasons
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/favorites"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
