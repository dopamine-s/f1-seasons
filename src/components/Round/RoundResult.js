import Card from '../../UI/Card';
import FavoriteToggleButton from './FavoriteToggleButton';
import ResultIdItem from './ResultIdItem';
import ResultInfoItem from './ResultInfoItem';
import classes from './RoundResult.module.css';

const RoundResult = (props) => {
  const toggleFavoriteHandler = (selectedFavorite) => {
    props.onToggle(selectedFavorite);
  };

  let winnerClasses = '';

  if (props.position <= 3) {
    winnerClasses = classes['card-winner'];
  }

  const cssClasses = `${classes.card} ${winnerClasses}`;

  return (
    <li>
      <Card className={cssClasses}>
        <ResultIdItem title={'Position'} info={props.position} />
        <ResultInfoItem title={'Points'} info={props.points} />
        <ResultInfoItem title={'Code'} info={props.code} />
        <ResultInfoItem title={'Name'} info={props.givenName} />
        <ResultInfoItem title={'Last Name'} info={props.familyName} />
        <ResultInfoItem title={'Team'} info={props.team} />
        <ResultInfoItem title={'Time'} info={props.time} />
        <FavoriteToggleButton
          id={props.id}
          driverId={props.driverId}
          dateOfBirth={props.dateOfBirth}
          givenName={props.givenName}
          familyName={props.familyName}
          code={props.code}
          nationality={props.nationality}
          permanentNumber={props.permanentNumber}
          isFavorite={props.isFavorite}
          onToggle={toggleFavoriteHandler}
        />
      </Card>
    </li>
  );
};

export default RoundResult;
