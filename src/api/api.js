import { BASE_URL } from '../constants/constants';
import { seasonsQuantity } from '../utils/helpers';

export const getSeasonsList = async () => {
  const responseJson = await fetch(
    `${BASE_URL}/seasons.json?limit=${seasonsQuantity}`,
  );
  const response = await responseJson.json();

  return response.MRData.SeasonTable.Seasons;
};

export const getRounds = async (season) => {
  const responseJson = await fetch(`http://ergast.com/api/f1/${season}.json`);
  const response = await responseJson.json();

  return response.MRData.RaceTable.Races;
};
