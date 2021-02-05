import React, { useState } from "react";
import { StyleSheet, Text, FlatList, View, ScrollView, Alert } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

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

  function submitHandler(text) {
    text.length > 3
      ? setTodos((prevTodos) => {
          return [{ text, key: `"${prevTodos.length}"` }, ...prevTodos];
        })
      : alert("Todo must be longer than 3");
  }

  function pressHandler(key) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddTodo submitHandler={submitHandler} />
      <FlatList
        data={todos}
        renderItem={(todos) => {
          return <TodoItem item={todos} pressHandler={pressHandler} />;
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
