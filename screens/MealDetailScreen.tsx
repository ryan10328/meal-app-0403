import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenName } from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

type MealDeailProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.MealDetail
>;

const MealDetailScreen = ({ route }: MealDeailProps) => {
  const id = route.params.id;
  const meal = MEALS.find((item) => item.id === id);

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
