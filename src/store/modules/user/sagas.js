import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    ); // junta dois objetos

    const response = yield call(api.put, 'users', profile);
    yield put(updateProfileSuccess(response.data));
    Alert.alert('Success!', 'Profile was updated');
  } catch (err) {
    Alert.alert('Fail!', 'Error updating your profile, check your form!');
    yield put(updateProfileFailure());
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
