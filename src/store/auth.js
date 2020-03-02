import firebase from "firebase/app";

export default {
  actions: {
    // eslint-disable-next-line no-unused-vars
    async login({ commit }, { email, password }) {
      try {
        await await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },

    // eslint-disable-next-line no-unused-vars
    async register({ commit }, { email, password, name }) {
      try {
        const registeredData = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        const uid = registeredData.user.uid;

        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            bill: 100000,
            name
          });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },

    /*
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },*/

    async logout() {
      await firebase.auth().signOut();
    }
  }
};
