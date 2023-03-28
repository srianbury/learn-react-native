import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function FirstScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello, React Native!</Text>
      <Text>Love, the first screen</Text>
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

export { FirstScreen };
