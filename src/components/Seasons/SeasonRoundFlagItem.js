import { getCountryCode } from '../../utils/helpers';
import classes from './SeasonRoundFlagItem.module.css';

const SeasonRoundFlagItem = (props) => {
  const code = getCountryCode(props.country);

  return (
    <>
      <div className={classes.wrapper}>
        <img
          src={require(`../../images/flags/${code}.svg`)}
          width="20%"
          title="Country Flag"
          alt={props.country}
        />
      </div>
    </>
  );
};

export default SeasonRoundFlagItem;
