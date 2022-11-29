import RoundResult from './RoundResult';
import classes from './RoundResultsList.module.css';

const RoundResultsList = (props) => {
  console.log(props);

  return (
    <ul className={classes.results}>
      {props.results.map((result) => (
        <RoundResult
          key={result.number}
          position={result.position}
          points={result.points}
          driverId={result.Driver.driverId}
          permanentNumber={result.Driver.permanentNumber}
          code={result.Driver.code}
          givenName={result.Driver.givenName}
          familyName={result.Driver.familyName}
          dateOfBirth={result.Driver.dateOfBirth}
          nationality={result.Driver.nationality}
          time={result.Time ? result.Time.time : 'Dropped out'}
          team={result.Constructor.name}
        />
      ))}
    </ul>
  );
};

export default RoundResultsList;
