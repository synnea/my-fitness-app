import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SessionDashboard from "./components/SessionDashboard/SessionDashboard";
import setupServer from "./utils/serverUtils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  setupServer();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <SessionDashboard />
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
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
