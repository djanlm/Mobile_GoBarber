import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'], // reducer os quais eu quero armazenar informaçoes
    },
    reducers
  );

  return persistedReducer;
};
