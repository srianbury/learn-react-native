import { useState } from "react";
import { Text, View, TextInput } from "react-native";

function FirstScreen(): JSX.Element {
  const [text, setText] = useState<string>("");

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, marginTop: 40 }}
        placeholder="Type here to translate..."
        onChangeText={setText}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => (word.trim() !== "" ? "🍕" : ""))
          .join(" ")}
      </Text>
    </View>
  );
}

export { FirstScreen };
