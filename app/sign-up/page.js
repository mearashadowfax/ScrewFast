"use client";

import { useState } from "react";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { usersAPI } from "@/lib/api";
import {
  AuthShell,
  AuthItem,
  FieldGroup,
  Field,
  PasswordField,
  PrimaryButton,
  GoogleButton,
  Divider,
  FormError,
  LegalLine,
} from "@/components/auth/AuthShell";

// Where to land after auth: an in-app path from ?redirect=, else home.
function postAuthDestination() {
  const raw = new URLSearchParams(window.location.search).get("redirect");
  return raw && raw.startsWith("/") && !raw.startsWith("//") ? raw : "/home";
}

// Exchange the Firebase ID token for a backend session. Force a refresh so the
// token carries the display name set a moment ago — otherwise the backend
// creates the profile from the pre-update token and falls back to the email.
async function completeSignIn(user) {
  const idToken = await user.getIdToken(true);
  const response = await fetch("/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({ idToken }),
  });
  return response.json();
}

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      if (fullName) {
        await updateProfile(user, { displayName: fullName });
      }

      const data = await completeSignIn(user);

      if (data.success) {
        // The profile may have been created from the pre-updateProfile token (auth state
        // fires before the name lands); make the name explicit before moving on.
        if (fullName) await usersAPI.updateMe({ displayName: fullName }).catch(() => {});
        // Verification is soft: it only gates withdrawals (KB 28). Never block sign-up on it.
        await sendEmailVerification(user, { url: `${window.location.origin}/verify-email?redirect=/home` }).catch(() => {});
        window.location.href = postAuthDestination();
      } else {
        setError("Sign up failed");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address");
      } else {
        setError(error.message || "Sign up failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    setError("");

    try {
      const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
      const data = await completeSignIn(user);

      if (data.success) {
        window.location.href = postAuthDestination();
      } else {
        setError(data.message || "Sign up failed");
      }
    } catch (error) {
      console.error("Google sign up error:", error);
      setError(error.message || "Sign up failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Free, and it takes about a minute."
      alt={{ href: "/sign-in", label: "Sign in" }}
    >
      <AuthItem>
        <form onSubmit={handleEmailSignUp} className="space-y-4">
          <FieldGroup>
            <Field
              id="fullName"
              label="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="name"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </FieldGroup>

          <div className="space-y-2">
            <FieldGroup>
              <PasswordField
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <PasswordField
                id="confirmPassword"
                label="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </FieldGroup>
            <p className="px-1 text-xs text-gray-400">At least 6 characters.</p>
          </div>

          <FormError>{error}</FormError>

          <PrimaryButton loading={isLoading}>Create account</PrimaryButton>

          <LegalLine action="creating an account" />
        </form>
      </AuthItem>

      <AuthItem className="my-6">
        <Divider />
      </AuthItem>

      <AuthItem>
        <GoogleButton onClick={handleGoogleSignUp} disabled={isLoading}>
          Continue with Google
        </GoogleButton>
      </AuthItem>

      <AuthItem className="mt-10 text-center">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-purple-600 transition-colors duration-300 hover:text-purple-700"
          >
            Sign in
          </Link>
        </p>
      </AuthItem>
    </AuthShell>
  );
}
