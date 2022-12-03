import { nanoid } from 'nanoid';

import RoundResult from './RoundResult';
import classes from './RoundResultsList.module.css';

const RoundResultsList = (props) => {
  const addFavoriteHandler = (addedFavorite) => {
    props.onAdd(addedFavorite);
  };

  return (
    <ul className={classes.results}>
      {props.results.map((result) => (
        <RoundResult
          key={nanoid()}
          id={nanoid()}
          position={result.position}
          points={result.points}
          driverId={result.Driver.driverId}
          permanentNumber={result.Driver.permanentNumber}
          code={result.Driver.code ?? 'N/A'}
          givenName={result.Driver.givenName}
          familyName={result.Driver.familyName}
          dateOfBirth={result.Driver.dateOfBirth}
          nationality={result.Driver.nationality}
          time={result.Time ? result.Time.time : 'Dropped out'}
          team={result.Constructor.name}
          onAdd={addFavoriteHandler}
        />
      ))}
    </ul>
  );
};

export default RoundResultsList;
