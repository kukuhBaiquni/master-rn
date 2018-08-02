import React from "react";
import { createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";
import {Icon} from 'react-native-elements'
import HomePage from '../Components/HomePage';
import RegisterLoginPage from '../Components/RegisterLoginPage'
import ResepDetailPage from '../Components/ResepDetailPage'

export const RootStack = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Beranda',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4d2e9b',
      }
    }
  },
  ResepDetails: {
    screen: ResepDetailPage,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.namaresep}`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4d2e9b',
      }
    })
  }
})

export const Tabs = createMaterialTopTabNavigator({
  Beranda: {
    screen: RootStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name='home' size={27} color={tintColor} />
  }
},
TulisResep: {
  screen: RegisterLoginPage,
  navigationOptions: {
    tabBarLabel: 'Tulis Resep',
    tabBarIcon: ({tintColor}) => <Icon name='create' size={27} color={tintColor} />
}
},
Profil: {
  screen: HomePage,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon name='account-box' size={27} color={tintColor} />
}
},
Cari: {
  screen: RegisterLoginPage,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon name='search' size={27} color={tintColor} />
}
}
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: 'white',
    inactiveTintColor: '#b7b7b7',
    labelStyle: {
      fontSize: 9,
      color: 'white'
    },
    tabStyle: {
      backgroundColor: 'transparent',
    },
    style: {
      backgroundColor: '#4d2e9b',
      borderWidth: 1,
      borderColor: '#4d2e9b',
      borderStyle: 'solid',
    },
    indicatorStyle: {
      backgroundColor: 'white'
    }
  }
});
