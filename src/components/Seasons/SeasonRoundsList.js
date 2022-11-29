import SeasonRound from './SeasonRound';
import classes from './SeasonRoundsList.module.css';

const SeasonRoundsList = (props) => {
  return (
    <ul className={classes.rounds}>
      {props.rounds.map((round) => (
        <SeasonRound
          key={round.round}
          round={round.round}
          raceName={round.raceName}
          circuitId={round.Circuit.circuitId}
          circuitName={round.Circuit.circuitName}
          country={round.Circuit.location.country}
          city={round.Circuit.location.locality}
          date={round.date}
        />
      ))}
    </ul>
  );
};

export default SeasonRoundsList;
