import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button , Alert} from "react-native";

export default function addTodo({ submitHandler }) {
  const [text, setText] = useState("");
  function changeHandler(val) {
    setText(val);
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Todo..."
        style={styles.input}
        onChangeText={changeHandler}
      />
      <Button
        title="Add Todo"
        color="coral"
        width={30}
        onPress={() =>
          text !== "" ? submitHandler(text) : Alert.alert("Please add a todo")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  input: {
    padding: 16,
    textAlign: "center",
    fontSize: 25,
  },
});
