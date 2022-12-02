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
  const responseJson = await fetch(`${BASE_URL}/${season}.json`);
  const response = await responseJson.json();

  return response.MRData.RaceTable.Races;
};

export const getRoundResults = async (season, round) => {
  const responseJson = await fetch(
    `${BASE_URL}/${season}/${round}/results.json`,
  );

  const response = await responseJson.json();

  return response;
};
