// importing React's Context API functions
import { createContext, useContext } from "react";

//create new context to hold restaurant context data 
export const RestaurantContext = createContext();

//custom hook to access RestaurantContext in other components
export const useRestaurants = () => useContext(RestaurantContext);
