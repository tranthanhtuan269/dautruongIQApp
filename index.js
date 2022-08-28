import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Register from './screens/Register'
import Profile from './screens/Profile'
import Main from './screens/Main'

AppRegistry.registerComponent(appName, () => () => <Profile />);
