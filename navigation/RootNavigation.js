
import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import AddQuestion from '../screens/AddQuestion'
import SearchScreen from '../screens/SearchScreen'
import SettingScreen from '../screens/SettingsScreen'
const RootStackNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Add: {
      screen: AddQuestion,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      style: {
        backgroundColor:'#3FB14F'
      }
    }),
  }
);

const DrawerNav = DrawerNavigator({
  Home: {
    screen: RootStackNavigator
  },
  About: {
    screen: SettingScreen
  }
}, {
    contentComponent: props => <DrawerContent  {...props} />,
  })

const DrawerContent = (props) => (

  <View  style={{flex:1, flexDirection: 'column', paddingBottom: 10, justifyContent: 'space-between' }} >
    <View>
      <View style={{ flexDirection: 'row', padding: 30, paddingBottom: 0, height:100,justifyContent: 'center',alignItems:'center' }} >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >DIU Questions</Text>
      </View>
      <DrawerItems {...props} />
    </View>
    <View style={{alignItems:'center'}} >
    <Text style={{ textAlign:'center' }} >Not affiliated with Daffodil International University</Text>
    </View>
   

  </View>
)

export default DrawerNav;