import { useNavigate } from 'react-router-dom';

import Card from '../../UI/Card';
import RoundIdItem from './RoundIdItem';
import RoundInfoItem from './RoundInfoItem';
import classes from './SeasonRound.module.css';
import SeasonRoundDetailsButton from './SeasonRoundDetailsButton';

const SeasonRound = (props) => {
  const navigate = useNavigate();

  const showRoundDetailsHandler = (round) => {
    navigate(`/${props.selectedSeason}/${round}`);
  };

  return (
    <li>
      <Card className={classes.card}>
        <RoundIdItem title={'Race'} info={props.raceName} />
        <RoundInfoItem title={'Date'} info={props.date} />
        <RoundInfoItem title={'Round'} info={props.round} />
        <RoundInfoItem title={'Circut ID'} info={props.circuitId} />
        <RoundInfoItem title={'Circuit Name'} info={props.circuitName} />
        <RoundInfoItem title={'Country'} info={props.country} />
        <RoundInfoItem title={'City'} info={props.city} />
        <SeasonRoundDetailsButton
          onSelect={showRoundDetailsHandler}
          info={'Show standings'}
          round={props.round}
        />
      </Card>
    </li>
  );
};

export default SeasonRound;
