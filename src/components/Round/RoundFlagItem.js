// import { countryListAllIsoData } from '../../constants/constants';
import imgFlag from '../../images/flags/ad.svg';
import classes from './RoundFlagItem.module.css';

const RoundFlagItem = (props) => {
  // const ifCountryFound = countryListAllIsoData.find(
  //   (country) => country.name === props.country,
  // );
  // const code = ifCountryFound ? ifCountryFound.code.toLowerCase() : 'n/a';

  // const img = `../../../public/images/flags/${code}.svg`;
  // console.log(img);

  // console.log(code, 'code');
  // console.log(props.country, 'country');

  return (
    <>
      <img
        className={classes.flag}
        src={imgFlag}
        width="15%"
        title="Country Flag"
        alt={props.country}
      />
    </>
  );
};

export default RoundFlagItem;
