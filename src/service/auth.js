import firebase from "firebase"
 const githubAuth = (provider) => {
    return firebase.auth().signInWithPopup(provider)
        .then((res) => {
            return res.user;
        })
        .catch((err) => {
            return err;
        })
}
export default githubAuth;