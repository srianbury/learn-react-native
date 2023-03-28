import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FirstScreen } from "./FirstScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingTop: 22,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <FirstScreen />
      <StatusBar style="auto" />
    </View>
  );
}
