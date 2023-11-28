import { resturantsList } from '../utils/static';
import RestaurantCard from './RestaurantCard';

const Body = () => (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      {resturantsList.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );

  export default Body;