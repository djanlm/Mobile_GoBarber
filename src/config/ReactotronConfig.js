import Reactotron from 'reactotron-react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect(); // let's connect!

  tron.clear();
  console.tron = tron;
}

// adb reverse tcp:9090 tcp:9090 , use this command to connect to reactotron when using android
