import Card from '../UI/Card';
import classes from './Favorite.module.css';
import FavoriteDate from './FavoriteDate';
import FavoriteIdItem from './FavoriteIdItem';
import FavoriteInfoItem from './FavoriteInfoItem';
import FavoriteRemoveButton from './FavoriteRemoveButton';

const Favorite = (props) => {
  return (
    <li>
      <Card className={classes.card}>
        <FavoriteIdItem title={'Driver Id'} info={props.driverId} />
        <FavoriteDate date={props.date} />
        <FavoriteInfoItem title={'Name'} info={props.givenName} />
        <FavoriteInfoItem title={'Last Name'} info={props.familyName} />
        <FavoriteInfoItem title={'Code'} info={props.code} />
        <FavoriteInfoItem title={'Nationality'} info={props.nationality} />
        <FavoriteInfoItem
          title={'Permanent Number'}
          info={props.permanentNumber}
        />
        <FavoriteRemoveButton
          info={'Remove'}
          onRemove={props.onRemove}
          driverId={props.driverId}
        />
      </Card>
    </li>
  );
};

export default Favorite;
