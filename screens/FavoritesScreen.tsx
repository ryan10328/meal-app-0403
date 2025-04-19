import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAppSelector } from "../hooks";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavoritesScreen = () => {
  const favoritesMealIds = useAppSelector((state) => state.favorites.ids);
  const favoritesMeals = MEALS.filter((meal) => {
    return favoritesMealIds.includes(meal.id);
  });

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoritesMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
});
