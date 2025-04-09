import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { RootStackParamList, ScreenName } from "../types/navigation";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.MealsOverview
>;

const MealsOverviewScreen = ({
  route,
  navigation,
}: MealsOverviewScreenProps) => {
  const id = route.params.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((item) => item.id === id)?.title,
    });
  }, [id, navigation]);

  const meals = MEALS.filter((meal: Meal): boolean =>
    meal.categoryIds.includes(id),
  );
  const renderMealItem = (meal: ListRenderItemInfo<Meal>) => {
    const props = { ...meal.item };
    return <MealItem {...props} />;
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
