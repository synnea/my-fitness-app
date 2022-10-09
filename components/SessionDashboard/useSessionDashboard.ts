import keys from "../../constants/keys";
import setupServer from "../../utils/serverUtils";
import Parse from "parse/react-native.js";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IExercise } from "../../constants/types";

async function fetchExercises() {
  let query = new Parse.Query("exercises");
  let queryResult = await query.findAll();

  const objectResult = JSON.parse(JSON.stringify(queryResult)) as IExercise[];

  console.log(objectResult, "objectResult");

  if (queryResult) return objectResult;
}
function useSessionDashboard() {
  const queryClient = useQueryClient();

  const { data: exercises } = useQuery(["exercises"], fetchExercises);

  return { exercises };
}

export { useSessionDashboard };
