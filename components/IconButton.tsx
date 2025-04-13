import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  name: string;
  size?: number;
  color?: string;
  onPress: (evt: GestureResponderEvent) => void;
};

const IconButton = ({ name, size, color, onPress }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} style={(pressed) => pressed && styles.pressed}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
