import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function TodoItem({ item }) {
  return (<TouchableOpacity><Text style={styles.todo}>{item.item.text}</Text></TouchableOpacity>);
}


const styles = StyleSheet.create({
  todo: {
    padding: 16,
    marginTop: 16,
    marginLeft: 18,
    marginRight: 18,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})