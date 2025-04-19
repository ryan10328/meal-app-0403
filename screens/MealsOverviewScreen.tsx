import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { RootStackParamList, ScreenName } from "../types/navigation";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList items={meals} />;
};

export default MealsOverviewScreen;
