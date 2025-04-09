import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { RootStackParamList, ScreenName } from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.MealsOverview
>;

const MealsOverviewScreen = ({ route }: MealsOverviewScreenProps) => {
  const id = route.params.id;
  const meals = MEALS.filter((meal: Meal): boolean =>
    meal.categoryIds.includes(id),
  );
  const renderMealItem = (item: ListRenderItemInfo<Meal>) => {
    return <MealItem title={item.item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item: Meal): string => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
