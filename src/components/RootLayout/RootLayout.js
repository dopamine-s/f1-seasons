import { useEffect, useState } from 'react';

import UpButton from '../../UI/UpButton';
import MainFooter from '../MainFooter/MainFooter';
import MainHeader from '../MainHeader/MainHeader';
import classes from './RootLayout.module.css';

const RootLayout = ({ children }) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MainHeader />
      <main className={classes.main}>{children}</main>
      {scroll > 320 && (
        <UpButton className={classes['up-button']} onClick={handleUpButton} />
      )}
      <MainFooter />
    </>
  );
};

export default RootLayout;
