import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc,collection,getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB56C3aNqEVfqDzfvEeeec_bgkcitt_i7Y",
  authDomain: "netflix-clone-e5f76.firebaseapp.com",
  projectId: "netflix-clone-e5f76",
  storageBucket: "netflix-clone-e5f76.appspot.com",
  messagingSenderId: "1017210293473",
  appId: "1:1017210293473:web:f590d5a251bb8a5d053ba0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    }catch(error){
        console.log(error);
        alert(error);
    }
}
const login = async (email,password)=> {
    try{
        signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error);
        alert(error);
    }
}

const logout = () =>{
    signOut(auth);
}

export {auth, db, login, signup, logout};