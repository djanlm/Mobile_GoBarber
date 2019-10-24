import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
