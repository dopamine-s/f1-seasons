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
          country={round.Circuit.Location.country}
          city={round.Circuit.Location.locality}
          date={round.date}
          selectedSeason={props.selectedSeason}
        />
      ))}
    </ul>
  );
};

export default SeasonRoundsList;
