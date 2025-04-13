import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreenName } from "../../types/navigation";
import CategoriesScreen from "../CategoriesScreen";
import FavoriteScreen from "../FavoriteScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        component={CategoriesScreen}
        name={DrawerScreenName.MealCategories}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen
        component={FavoriteScreen}
        name={DrawerScreenName.Favorite}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
