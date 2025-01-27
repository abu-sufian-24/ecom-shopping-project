

import { useEffect, useState } from "react";
import { AuthContext } from "../context"
import auth from "../data/firebaseConfig";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("No user logged in");
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const logOut = () => {
    return signOut(auth)
  }




  // data patching

  useEffect(() => {
    fetch("http://localhost:5000/shops")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  const productInfo = {
    user,
    createUser,
    loginUser,
    signinWithGoogle,
    logOut,
    products,
  }
  return (
    <AuthContext.Provider value={productInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider