import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenName } from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useAppDispatch, useAppSelector } from "../hooks";
import { add, remove } from "../favorites";

type MealDeailProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.MealDetail
>;

const MealDetailScreen = ({ route, navigation }: MealDeailProps) => {
  const id = route.params.id;
  const meal = MEALS.find((item) => item.id === id);
  const favoritesMealIds = useAppSelector((state) => state.favorites.ids);
  const mealIsFavorite = favoritesMealIds.includes(id);

  const dispatch = useAppDispatch();

  const toggleFavoriteStatus = () => {
    mealIsFavorite ? dispatch(remove({ id: id })) : dispatch(add({ id: id }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={toggleFavoriteStatus}
            name={mealIsFavorite ? "star" : "star-outline"}
            size={24}
            color="white"
          />
        );
      },
    });
  }, [navigation, toggleFavoriteStatus]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal?.imageUrl }} />
      <Text style={styles.title}>{meal?.title}</Text>
      <MealDetails
        duration={meal?.duration}
        complexity={meal?.complexity}
        affordability={meal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List items={meal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List items={meal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
