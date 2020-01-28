import React from 'react'
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import images from 'res/images'
import colors from 'res/colors'
import palette from 'res/palette'
import HomeNavigator from './home/HomeNavigator'
import SearchNavigator from 'containers/main/search/SearchNavigator'
import AddPostNavigator from 'containers/main/addPost/AddPostNavigator'
import ActivityNavigator from 'containers/main/activity/ActivityNavigator'
import ProfileNavigator from 'containers/main/profile/ProfileNavigator'
import { width, height } from '../../Dimensions'

const routeConfig = {
  Home: HomeNavigator,
  Search: SearchNavigator,
  AddPost: AddPostNavigator,
  Activity: ActivityNavigator,
  Profile: ProfileNavigator,
};

const navigatorConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      style: { backgroundColor: colors.tabBackground },
    },
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let icon;
      switch (routeName) {
        case 'Home': icon = focused ? images.home_selected : images.home; break;
        case 'Search': icon = focused ? images.search_selected : images.search; break;
        case 'AddPost': icon = focused ? images.add_selected : images.add; break;
        case 'Activity': icon = focused ? images.activity_selected : images.activity; break;
        case 'Profile': icon = focused ? images.profile_selected : images.profile; break;
        default: icon = focused ? images.home_selected : images.home; break;
      }
      return <View>
        {routeName === 'Profile' ?
          <Image style={{ height: height * 0.035, width: width * 0.06, borderRadius: height * 0.02 }} source={icon} /> :
          <Image style={{ ...palette.header.image }} source={icon} />
        }</View>

    },
    /*tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },*/
  })
}

export default TabNavigator = createBottomTabNavigator(routeConfig, navigatorConfig);