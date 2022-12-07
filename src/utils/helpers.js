import {
  countryListAllIsoData,
  FIRST_SEASON_YEAR,
} from '../constants/constants';

export const currentYear = new Date().getFullYear();
export const seasonsQuantity = currentYear - FIRST_SEASON_YEAR + 1;

export const getCountryCode = (countryEntered) => {
  const ifCountryFound = countryListAllIsoData.find(
    (country) => country.name === countryEntered,
  );
  const code = ifCountryFound ? ifCountryFound.code.toLowerCase() : 'race-flag';

  return code;
};
