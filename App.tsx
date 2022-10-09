import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SessionDashboard from "./components/SessionDashboard/SessionDashboard";
import setupServer from "./utils/serverUtils";

export default function App() {
  setupServer();

  return (
    <View style={styles.container}>
      <SessionDashboard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
