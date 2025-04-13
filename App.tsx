import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { RootStackParamList, ScreenName } from "./types/navigation";
import MealDetailScreen from "./screens/MealDetailScreen";
import DrawerNavigator from "./screens/drawer/DrawerNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={ScreenName.MealsOverview}
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name={ScreenName.MealDetail}
            component={MealDetailScreen}
            options={{
              title: "About the Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
