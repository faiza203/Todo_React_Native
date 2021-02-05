import React, { useState } from "react";
import { StyleSheet, Text, FlatList, View, ScrollView } from "react-native";
import Header from "./components/Header";
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Buy Coffee",
      key: "1",
    },
    {
      text: "Create a Project",
      key: "2",
    },
    {
      text: "Play Football",
      key: "3",
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <AddTodo />
      <ScrollView >
        <FlatList
          data={todos}
          renderItem={(todos) => {
            return <TodoItem item={todos} />
          }}
        ></FlatList>
      </ScrollView >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
