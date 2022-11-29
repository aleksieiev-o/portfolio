import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const {
  VUE_APP_API_KEY,
  VUE_APP_AUTH_DOMAIN,
  VUE_APP_DATABASE_URL,
  VUE_APP_PROJECT_ID,
  VUE_APP_STORAGE_BUCKET,
  VUE_APP_MESSAGING_SENDER_ID,
  VUE_APP_APP_ID,
  VUE_APP_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: VUE_APP_API_KEY,
  authDomain: VUE_APP_AUTH_DOMAIN,
  databaseURL: VUE_APP_DATABASE_URL,
  projectId: VUE_APP_PROJECT_ID,
  storageBucket: VUE_APP_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_MESSAGING_SENDER_ID,
  appId: VUE_APP_APP_ID,
  measurementId: VUE_APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
// eslint-disable-next-line import/prefer-default-export
export const firebaseDB = getDatabase(firebaseApp);
