import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList, ScreenName } from "../types/navigation";

type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.MealsOverview
>;

const MealsOverviewScreen = ({ route }: MealsOverviewScreenProps) => {
  const id = route.params.id;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen {id}</Text>
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
