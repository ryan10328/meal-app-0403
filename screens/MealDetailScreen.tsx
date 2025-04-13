import { View, Text, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenName } from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

type MealDeailProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.MealDetail
>;

const MealDetailScreen = ({ route }: MealDeailProps) => {
  const id = route.params.id;
  const selectedMeal = MEALS.find((item) => item.id === id);

  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }} />
      <Text>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}
      <Text>Steps</Text>
      {selectedMeal?.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
};

export default MealDetailScreen;
