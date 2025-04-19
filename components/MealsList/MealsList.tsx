import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";
import React from "react";
import MealItem from "./MealItem";
import Meal from "../../models/meal";

type MealsListProps = {
  items: Meal[];
};

const MealsList = ({ items }: MealsListProps) => {
  const renderMealItem = (meal: ListRenderItemInfo<Meal>) => {
    const props = { ...meal.item };
    return <MealItem {...props} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item: Meal): string => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
