import { getCountryCode } from '../../utils/helpers';
import classes from './RoundFlagItem.module.css';

const RoundFlagItem = (props) => {
  const code = getCountryCode(props.country);

  return (
    <>
      <img
        className={classes.img}
        src={require(`../../images/flags/${code}.svg`)}
        width="15%"
        title="Country Flag"
        alt={props.country}
      />
    </>
  );
};

export default RoundFlagItem;
