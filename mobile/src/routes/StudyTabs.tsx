import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';
const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          //estilo do container das abas
          elevation: 0, //"box-shadow do Android"
          shadowOpacity: 0, //"box-shadow do IOS"
          height: 64,
        },
        tabStyle: {
          //estilo de cada aba
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          //estilo do icone
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          //texto interno
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc', //cor de fundo da aba quando não está selecionada
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc', //cor de texto da aba quando não está selecionada
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
