import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_MESSAGING_SENDEDID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then(result => {
      const { credential } = result;
      const token = credential.accessToken;
      const { user } = result;
      console.log({ user, credential, token });
    })
    .catch(error => {
      console.log({
        error
      });
    });

export const addProducts = async (
  collectionkey,
  objectstoadd
) => {
  const collectionref = firestore.collection(collectionkey);
  const batch = firestore.batch();
  objectstoadd.forEach(item => {
    const newDocRef = collectionref.doc();
    console.log(newDocRef);
    batch.set(newDocRef, item);
  });
  return batch.commit();
};

export const convertCollections = products => {
  const abbas = products.docs.map(doc => {
    const data = doc.data();
    return data;
  });
  return abbas;
};

export const addOrder = async order => {
  const collectionRef = firestore.collection('orders');
  const batch = firestore.batch();
  const newDocRef = collectionRef.doc();
  batch.set(newDocRef, order);
  return batch.commit();
};

export default firebase;
