import React, { useState } from "react";
import { StyleSheet, View, ScrollView, FlatList, Button } from "react-native";

import ListItem from "./components/ListItem";
import InputArea from "./components/InputArea";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalContent => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalContent }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <InputArea
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        cancelAddGoalHandler={cancelAddGoalHandler}
      />

      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <ListItem
            id={itemData.item.key}
            content={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
