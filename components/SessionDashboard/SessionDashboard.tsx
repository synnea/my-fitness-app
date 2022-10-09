import { View, Text } from "react-native";
import { useSessionDashboard } from "./useSessionDashboard";

function SessionDashboard() {
  const APPLICATION_ID = "cp24NUflxN3lZ6TsvlbsFikjwwUUMXMp0ywZ0iTJ";
  const JAVASCRIPT_KEY = "Kj60BShDs0Kli0K8RVP3F8urruSAkNukvTAr4xlD";

  useSessionDashboard();
  return (
    <View>
      <Text>Let's work out</Text>
      <View>
        <Text>Cardio</Text>
      </View>
      <View>
        <Text>Strength</Text>
      </View>
    </View>
  );
}

export default SessionDashboard;
