import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/addTodo";
// import SandBox from "./components/Sandbox"

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
    // <SandBox />
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <AddTodo submitHandler={submitHandler} />
        <FlatList
          data={todos}
          renderItem={(todo) => {
            return <TodoItem item={todo} pressHandler={pressHandler} />;
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
  body: {
    marginTop: 16,
    marginLeft: 18,
    marginRight: 18,
  },
});
