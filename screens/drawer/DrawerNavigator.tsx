import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreenName } from "../../types/navigation";
import CategoriesScreen from "../CategoriesScreen";
import FavoritesScreen from "../FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#451401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#451401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        component={CategoriesScreen}
        name={DrawerScreenName.Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        component={FavoritesScreen}
        name={DrawerScreenName.Favorite}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
