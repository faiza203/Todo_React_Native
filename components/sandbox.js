import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Sand Box</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex :1,
    paddingTop: 800,
    backgroundColor : '#333'
  },
});
