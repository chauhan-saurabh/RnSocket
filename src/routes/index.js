import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import UserListing from '../screens/userListing';
import RoomListing from '../screens/roomListing';
import Room from '../screens/room';
const Routes = () => (
  <Router>
    <Stack key="main">
      <Scene
        key="users"
        component={UserListing}
        panHandlers={null}
        hideNavBar
        hideTabBar
      />
      <Scene
        key="rooms"
        component={RoomListing}
        panHandlers={null}
        hideNavBar
        hideTabBar
      />
      <Scene
        key="room"
        component={Room}
        panHandlers={null}
        hideNavBar
        hideTabBar
      />
    </Stack>
  </Router>
);

export default Routes;
