import { View, Text } from "react-native";
import React from "react";

type MealItemProps = {
  title: string;
};

const MealItem = ({ title }: MealItemProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
