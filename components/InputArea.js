import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export default function InputArea(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = goalText => {
    setEnteredGoal(goalText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={props.cancelAddGoalHandler.bind(this)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 15
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    width: "40%"
  }
});
