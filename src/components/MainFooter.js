import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import gitImg from '../images/git-img.svg';
import linkedImg from '../images/linkedIn-img.svg';
import logoImg from '../images/logo-img.svg';
import classes from './MainFooter.module.css';

const MainFooter = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={classes.footer}>
      <h1>F1 races results</h1>
      <Link
        onClick={scroll > 0 && handleUpScroll}
        className={classes.logo}
        to="/"
      >
        <img
          src={logoImg}
          width="65"
          title="F1 Seasons App"
          alt="F1 Seasons App Logo"
        />
      </Link>
      <div className={classes.copyright}>
        <p>© Fedor Klochkov</p>
        <a
          className={classes['icons-copyright']}
          href="https://iconscout.com/icons/social"
          target="_blank"
          rel="noreferrer"
        >
          <span>Social Icons by Iconscout</span>
        </a>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a
              className={classes.social}
              target="_blank"
              href="https://www.linkedin.com/in/fedor-dopamine/"
              rel="noreferrer"
            >
              <img
                src={linkedImg}
                width="30"
                title="LinkedIn Link"
                alt="LinkedIn Logo"
              />
            </a>
          </li>
          <li>
            <a
              className={classes.social}
              target="_blank"
              href="https://github.com/dopamine-s"
              rel="noreferrer"
            >
              <img
                src={gitImg}
                width="30"
                title="GitHub Link"
                alt="GitHub Link Logo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default MainFooter;
