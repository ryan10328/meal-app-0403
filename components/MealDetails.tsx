import { View, Text, StyleSheet } from "react-native";
import React from "react";

type MealDetailsProps = {
  duration: number | undefined;
  complexity: string | undefined;
  affordability: string | undefined;
};

const MealDetails = ({
  duration,
  complexity,
  affordability,
}: MealDetailsProps) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}</Text>
      <Text style={styles.detailItem}>{complexity?.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability?.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
