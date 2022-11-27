import SeasonRound from './SeasonRound';

const SeasonRoundsList = (props) => {
  return (
    <ul>
      {props.rounds.map((round) => (
        <SeasonRound key={round.round} />
      ))}
    </ul>
  );
};

export default SeasonRoundsList;
