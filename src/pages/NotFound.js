import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <div>
        <p className={classes.center}>Page doesn&apos;t exist.</p>
      </div>
      <div></div>
    </>
  );
};

export default NotFound;
