import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import classes from './RootLayout.module.css';

const RootLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className={classes.main}>{children}</main>
      <MainFooter />
    </>
  );
};

export default RootLayout;
