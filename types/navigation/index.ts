import { NavigationProp } from "@react-navigation/native";

export const enum ScreenName {
  MealCategories = "MealCategories",
  MealsOverview = "MealsOverview",
  MealDetail = "MealDetail",
}

export type RootStackParamList = {
  [ScreenName.MealCategories]: undefined;
  [ScreenName.MealsOverview]: {
    id: string;
  };
  [ScreenName.MealDetail]: {
    id: string;
  };
};

// the type we will apply on useNavigation<T>
export type NavigationPropRootStack = NavigationProp<RootStackParamList>;

export const enum DrawerScreenName {
  Categories = "Categories",
  Favorite = "Favorite",
}
