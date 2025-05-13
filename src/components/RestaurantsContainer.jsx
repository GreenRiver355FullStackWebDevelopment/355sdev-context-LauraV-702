import Restaurant from "./Restaurant";

//import custom hook to access restaurant data
import { useRestaurants } from "../context/RestaurantContext";

function RestaurantsContainer() {
  //get list of restaurants from context
  const { restaurants } = useRestaurants();

  return (
    <div className="restaurantContainer">
      {/* loop through each restaurant and render */}
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
