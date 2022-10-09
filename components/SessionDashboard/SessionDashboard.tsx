import { View, Text, StyleSheet } from "react-native";
import { useSessionDashboard } from "./useSessionDashboard";
import Exercises from "../Exercises/Exercises";

function SessionDashboard() {
  const { exercises = [] } = useSessionDashboard();

  return (
    <View style={styles.exerciseContainer}>
      <Text>Let's work out</Text>
      <View style={styles.exerciseType}>
        <Text>Cardio</Text>
      </View>
      <View>
        <Text style={styles.exerciseType}>Strength</Text>
        <Exercises exercises={exercises} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseType: {
    flex: 2,
  },
  exerciseContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingTop: 100,
    alignItems: "center",
  },
});

export default SessionDashboard;
