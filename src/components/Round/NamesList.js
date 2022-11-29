import classes from './NameList.module.css';

const NamesList = () => {
  return (
    <>
      <ul className={classes.names}>
        <li>
          <p>№</p>
        </li>
        <li>
          <p>Score</p>
        </li>
        <li>
          <p>Code</p>
        </li>
        <li>
          <p>Name</p>
        </li>
        <li>
          <p>Last name</p>
        </li>
        <li>
          <p>Team</p>
        </li>
        <li>
          <p>Time</p>
        </li>
        <li>
          <p>Add Fav</p>
        </li>
      </ul>
    </>
  );
};

export default NamesList;
