import classes from './NamesList.module.css';

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
          <p>Fav Add / Del</p>
        </li>
      </ul>
    </>
  );
};

export default NamesList;
