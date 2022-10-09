import keys from "../../constants/keys";
import setupServer from "../../utils/serverUtils";
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useSessionDashboard() {
  async function fetchExercises() {
    //create your Parse Query using the Person Class you've created
    let query = new Parse.Query("exercises");
    //run the query to retrieve all objects on Person class, optionally you can add your filters
    let queryResult = await query.findAll();
    //pick the first result
    console.log(queryResult, "queryResult");
  }

  fetchExercises();
}

export { useSessionDashboard };
