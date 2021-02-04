import React, { useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import Header from "./components/Header";
export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Buy Coffee",
      key: 1,
    },
    {
      text: "Create a Project",
      key: 2,
    },
    {
      text: "Play Football",
      key: 3,
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList
          data={todos}
          renderItem={(todo) => {
            return <Text>{todo.text}</Text>;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
