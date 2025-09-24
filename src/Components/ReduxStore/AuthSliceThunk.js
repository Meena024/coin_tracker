import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../Firebase/initialize";
import { createUserWithEmailAndPassword } from "firebase/auth";

const formatUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  verifiedUser: user.emailVerified,
});

export const handleSignUp = createAsyncThunk(
  "Auth/handleSignUp",
  async ({ email, password }, thunkAPI) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("uid", user.uid);
      return formatUser(user);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Signup failed");
    }
  }
);
