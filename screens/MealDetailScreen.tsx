import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenName } from "../types/navigation";

type MealDeailProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.MealDetail
>;

const MealDetailScreen = ({ route }: MealDeailProps) => {
  const id = route.params.id;
  return (
    <View>
      <Text>This is the Meal Detail screen ({id})</Text>
    </View>
  );
};

export default MealDetailScreen;
