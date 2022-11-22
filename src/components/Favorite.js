import Card from '../UI/Card';
import classes from './Favorite.module.css';
import FavoriteDate from './FavoriteDate';
import FavoriteInfoItem from './FavoriteInfoItem';

const Favorite = (props) => {
  return (
    <li>
      <Card className={classes.driver}>
        <FavoriteInfoItem title={'Name'} info={props.givenName} />
        <FavoriteInfoItem title={'Last Name'} info={props.familyName} />
        <FavoriteDate date={props.date} />
        <FavoriteInfoItem title={'Nationality'} info={props.nationality} />
        <FavoriteInfoItem title={'Code'} info={props.code} />
        <FavoriteInfoItem
          title={'Permanent Number'}
          info={props.permanentNumber}
        />
      </Card>
    </li>
  );
};

export default Favorite;
