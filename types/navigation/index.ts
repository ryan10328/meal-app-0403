import { NavigationProp } from "@react-navigation/native";

export const enum ScreenName {
  MealCategories = "MealCategories",
  MealsOverview = "MealsOverview",
}

export type RootStackParamList = {
  [ScreenName.MealCategories]: undefined;
  [ScreenName.MealsOverview]: {
    id: string;
  };
};

// the type we will apply on useNavigation<T>
export type NavigationPropRootStack = NavigationProp<RootStackParamList>;
