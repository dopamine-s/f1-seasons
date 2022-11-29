import Card from '../../UI/Card';
import FavoriteAddButton from './FavoriteAddButton';
import ResultIdItem from './ResultIdItem';
import ResultInfoItem from './ResultInfoItem';
import classes from './RoundResult.module.css';

const RoundResult = (props) => {
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
        <FavoriteAddButton
        // onAdd={props.onAdd}
        // driverId={props.driverId}
        />
      </Card>
    </li>
  );
};

export default RoundResult;
