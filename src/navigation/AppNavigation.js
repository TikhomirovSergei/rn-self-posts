import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { MainScreen } from "../screens/MainScreen"
import { PostScreen } from "../screens/PostScreen"

const PostNavigation = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
}, {
    initialRouteName: "Main"
})

export const AppNavigation = createStackNavigator(PostNavigation)