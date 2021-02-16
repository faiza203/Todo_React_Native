import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <View style={styles.todo}>
      <Text>{item.item.text}</Text>
      <TouchableOpacity onPress={() => pressHandler(item.item.key)}>
        <MaterialIcons name="delete" size={18} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    marginTop: 16,
    padding: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
