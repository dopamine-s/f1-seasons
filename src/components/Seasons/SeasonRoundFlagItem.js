// import { countryListAllIsoData } from '../../constants/constants';
import imgFlag from '../../images/flags/ad.svg';
import classes from './SeasonRoundFlagItem.module.css';

const SeasonRoundFlagItem = (props) => {
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
      <div className={classes.wrapper}>
        <img
          src={imgFlag}
          width="20%"
          title="Country Flag"
          alt={props.country}
        />
      </div>
    </>
  );
};

export default SeasonRoundFlagItem;
