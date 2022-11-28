import Card from '../UI/Card';
import RoundIdItem from './RoundIdItem';
import RoundInfoItem from './RoundInfoItem';
import classes from './SeasonRound.module.css';
import SeasonRoundDetailsButton from './SeasonRoundDetailsButton';

const SeasonRound = (props) => {
  return (
    <li>
      <Card className={classes.card}>
        <RoundIdItem title={'Race'} info={props.raceName} />
        <RoundInfoItem title={'Date'} info={props.date} />
        <RoundInfoItem title={'Round'} info={props.round} />
        <RoundInfoItem title={'Circut ID'} info={props.circuitId} />
        <RoundInfoItem title={'Circuit Name'} info={props.circuitName} />
        <RoundInfoItem title={'Country'} info={props.location} />
        <SeasonRoundDetailsButton info={'Show standings'} />
      </Card>
    </li>
  );
};

export default SeasonRound;
