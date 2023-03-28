import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FirstScreen } from "./FirstScreen";

export default function App() {
  return (
    <View>
      <FirstScreen />
      <StatusBar style="auto" />
    </View>
  );
}
