/* eslint-disable prettier/prettier */
import {firebase} from '@react-native-firebase/database';
const database = firebase.app().database('https://umbyforum-9309b-default-rtdb.asia-southeast1.firebasedatabase.app');

export const trackUserOnline = userId => {
  const reference = database.ref(`/users/${userId}`);
  // set true if user open the app
  reference.set({
    online: true,
    timestamp: new Date().getTime(),
  }).then(() => console.log('Online presence set'));

  // remove user when user close the app
  reference
    .onDisconnect()
    .set({
      online: false,
      timestamp: new Date().getTime(),
    })
    .then(() => console.log('On disconnect function configured.'));
};


export const getUserOnline = userId => {
  return database.ref(`/users/${userId}`);
};
