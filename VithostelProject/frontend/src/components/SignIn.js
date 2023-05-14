import React from "react";
import "./CSS/signIn.css";

import { signInWithGoogle } from "./Firebase.js";

export default function SignIn() {
  return (
    <div className="signButton">
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}
