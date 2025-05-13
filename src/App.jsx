import Main from "./components/Main";
import { RestaurantContext } from "./context/RestaurantContext";

import AddRestaurant from "./components/AddRestaurant";
import RestaurantsContainer from "./components/RestaurantsContainer"
;
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //store the list of restaurants
  const [restaurantState, setRestaurants] = useState([]);

  //fetch resaurnat data
  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await fetch("http://localhost:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }
    }

    fetchRestaurants();
  }, []);

  //update restaurant list adding a new one
  const updateRestaurants = (restaurant) => {
    setRestaurants([...restaurantState, restaurant]);
  };

  return (
    //Provide the resaurant data and updater function
    <RestaurantContext.Provider
      value={{ 
        restaurants: 
        restaurantState, 
        updateRestaurants }}
    >
      <div className="App">
        {/* Component to add new restaurants */}
        <AddRestaurant />

        {/* Component to display all restaurants */}
        <RestaurantsContainer />
      </div>
    </RestaurantContext.Provider>
  );
}
export default App;
