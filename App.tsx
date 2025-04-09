import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { RootStackParamList, ScreenName } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name={ScreenName.MealCategories}
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name={ScreenName.MealsOverview}
            component={MealsOverviewScreen}
            options={{
              title: "Meals Overview",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
