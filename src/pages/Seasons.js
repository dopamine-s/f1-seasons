import { useEffect, useState } from 'react';

import SeasonRoundsList from '../components/SeasonRoundsList';
import SeasonSelect from '../components/SeasonSelect';
import { MOCK_SEASON } from '../mock-data/mock-season';
import classes from './Seasons.module.css';

const Seasons = () => {
  const [scroll, setScroll] = useState(0);
  const [rounds, setRounds] = useState([]);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setRounds(MOCK_SEASON);
  }, []);

  let content = <p className={classes.center}>No seasons found</p>;

  if (rounds.length > 0) {
    content = <SeasonRoundsList rounds={rounds} />;
  }

  return (
    <>
      <h1>Formula 1: seasons</h1>
      <SeasonSelect />
      {content}
      {scroll > 320 && (
        <button className={classes['up-button']} onClick={handleUpButton}>
          Go up
        </button>
      )}
    </>
  );
};

export default Seasons;
