import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyAb4XVY9MqYmCeCf-oCBVj8OsCLsK7p7g0',
  authDomain: 'drinkin-games-81ea4.firebaseapp.com',
  databaseURL: 'https://drinkin-games-81ea4.firebaseio.com',
  projectId: 'drinkin-games-81ea4',
  storageBucket: '',
  messagingSenderId: '1078934947548',
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
