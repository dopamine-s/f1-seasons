import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import NamesList from '../components/Round/NamesList';
import RoundResultsList from '../components/Round/RoundResultsList';
import { MOCK_ROUND_RESULTS } from '../mock-data/mock-round-results';
import classes from './Round.module.css';

const Round = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(0);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    setResults(MOCK_ROUND_RESULTS);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  let content = <p className={classes.center}>No seasons found</p>;

  if (results.length > 0) {
    content = <RoundResultsList results={results} />;
  }

  return (
    <>
      {!isLoading && <h1>Circuit Name</h1>}
      <button
        className={classes['nav-button']}
        onClick={() => navigate(-1)}
        type="button"
      >
        Back to the season
      </button>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <NamesList />}
      <section className={classes.round}>{!isLoading && content}</section>
      {scroll > 320 && (
        <button className={classes['up-button']} onClick={handleUpButton}>
          Up!
        </button>
      )}
    </>
  );
};

export default Round;
