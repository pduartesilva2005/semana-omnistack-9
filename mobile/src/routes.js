import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/Login";
import List from "./pages/List";
import Book from "./pages/Book";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
      },
      List: {
        screen: List,
      },
      Book: {
        screen: Book,
      },
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
      },
    }
  )
);

export default Routes;
