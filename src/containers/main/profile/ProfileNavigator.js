import React from 'react'
import { View, Text, Platform, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { width, height } from '../../../Dimensions'
import images from 'res/images'
import ProfileScreen from './ProfileScreen'
import OtherScreen from '../../../containers/main/OtherScreen'
import ProfileDrawer from './ProfileDrawer'

const routeConfig = {
    ProfileStackNavigator: {
        screen: createStackNavigator({
            Profile: {
                screen: ProfileScreen,
                navigationOptions: ({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#222',
                    },
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
                    },
                    headerLeft: () => (
                        <View style={{ marginLeft: width*0.05, flex: 1, flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ color: '#fff', marginLeft: width*0.02, fontSize: width*0.04, fontWeight: 'bold' }} >hacerbusrakilic</Text>
                        </View >
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: width*0.05, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image style={{ height: width*0.06, width: width*0.06, resizeMode: 'contain' }} source={images.menu} />
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        })
    },

    Archive: {
        screen: OtherScreen,
        navigationOptions: {
            drawerLabel: "Demo Screen 1"
        }
    }
};

const navigatorConfig = {
    drawerPosition: 'right',
    drawerType: 'slide',
    contentComponent: ProfileDrawer,
}

export default ProfileNavigator = createDrawerNavigator(routeConfig, navigatorConfig);