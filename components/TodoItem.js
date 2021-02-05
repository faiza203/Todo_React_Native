import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function TodoItem({ item , pressHandler}) {
  return (<TouchableOpacity onPress={() => pressHandler(item.item.key)}><Text style={styles.todo}>{item.item.text}</Text></TouchableOpacity>);
}


const styles = StyleSheet.create({
  todo: {
    marginTop : 16,
    padding: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})