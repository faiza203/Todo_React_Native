import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function addTodo({ submitHandler }) {
    const [text, setText] = useState("");
    function changeHandler(val) { setText(val) }
    return (<View><TextInput placeholder="New Todo..." style={styles.input} onChangeText={changeHandler} /><Button title="Add Todo" style={styles.addBtn} 
    // onPress={() => submitHandler()}
     /></View>);
}

const styles = StyleSheet.create({
    input: {
        padding: 16,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        textAlign: "center",
    },
    addBtn: {
        padding: 16,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        textAlign: "right",
        width: 10,
        backgroundColor: 'coral'
    }
})