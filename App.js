import React from 'react';
import Expo, { Notifications } from 'expo';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeAuth from './screens/HomeAuth';
import NotificationsScreen from './screens/NotificationsScreen';
import MenteeDetailsView from './screens/MenteeDetailsView';
import registerForNotifications from './services/pushNotifications';

export default class App extends React.Component {
  componentDidMount() {
    // registerForNotifications();
    // Notifications.addListener(notification => {
    //   const {
    //     data: { text },
    //     origin
    //   } = notification;
    //
    //   if (origin === 'recieved' && text) {
    //     Alert.alert('new push notification', text, [{ text: 'Ok' }]);
    //   }
    // });
  }

  render() {
    const MainNavigator = TabNavigator({
      home: { screen: HomeAuth },
      notifications: { screen: NotificationsScreen },
      menteeDetails: { screen: MenteeDetailsView }
    });
    return <MainNavigator />;
  }
}
