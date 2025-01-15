import "firebase/auth";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../Context/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

// ============================== SIGN UP
export async function createUserAccount(Email, Password, Name, Phone) {
  try {
    const result = await createUserWithEmailAndPassword(auth, Email, Password);
    await updateProfile(result.user, {
      displayName: Name,
    });

    await setDoc(doc(db, "users", result.user.uid), {
      uid: result.user.uid,
      email: Email,
      name: Name,
      contact: Phone,
      RegisteredDate: new Date().getDate(),
      RegisteredTime: new Date().getTime(),
    });

    return result.user;    
  } catch (error) {
    console.error("Error signing up with Google:", error);
    throw error;
  }
}
// ============================== SIGN IN
export async function signInAccount(Email, Password) {
  try {
    const result = await signInWithEmailAndPassword(auth, Email, Password);
    return result
    console.log("logged in", Email, Password);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
// ============================== ResetPassword
export async function ResetPassword(Email) {
  try {
    const result =  await sendPasswordResetEmail(auth, Email);
    return result
    console.log("success", Email);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}
// ============================== SIGN  Out
export async function SignOut() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

export async function SignUpAgent(Email){
  try {
    const result = await addDoc(collection(db, "RequestAgent"), {
      Email,
    });
    return result
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}
export const WebsiteName = () => {
  return "Fuoye-Rentals";
};
export const Truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
};
export const Admin = true;
