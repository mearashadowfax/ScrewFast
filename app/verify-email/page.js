"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { sendEmailVerification } from "firebase/auth";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { ButtonLink, OutlineButton, SuccessMark } from "@/components/ui/Form";
import { STAGGER, useRevealVariants } from "@/lib/motion";

/**
 * Landing after Firebase's verification link (and the target of "Resend"). Firebase has
 * already applied the code on its hosted page; here we reload the user and say so.
 */
export default function VerifyEmail() {
  const { user, loading } = useAuth();
  const item = useRevealVariants();
  const [state, setState] = useState("checking"); // checking | verified | unverified | signed-out
  const [sent, setSent] = useState(false);
  const redirect = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("redirect") : null;
  const next = redirect && redirect.startsWith("/") && !redirect.startsWith("//") ? redirect : "/home";

  useEffect(() => {
    if (loading) return;
    if (!user) { setState("signed-out"); return; }
    user.reload().then(() => setState(user.emailVerified ? "verified" : "unverified")).catch(() => setState(user.emailVerified ? "verified" : "unverified"));
  }, [user, loading]);

  const resend = async () => {
    try {
      await sendEmailVerification(user, { url: `${window.location.origin}/verify-email?redirect=${encodeURIComponent(next)}` });
      toast.success("Verification link sent");
      setSent(true);
    } catch (e) {
      toast.error(e.code === "auth/too-many-requests" ? "Too many requests — try again in a few minutes." : "Couldn't send the link. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="mx-auto flex max-w-2xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2"><Image src="/logo.png" alt="" width={24} height={24} className="h-6 w-6" /><span className="text-sm font-semibold">GrupChat</span></Link>
      </header>
      <motion.section className="mx-auto w-full max-w-[400px] px-6 pb-24 pt-12 sm:pt-20" variants={STAGGER} initial="hidden" animate="show">
        {state === "checking" ? (
          <div className="h-40" aria-busy="true" />
        ) : state === "verified" ? (
          <motion.div variants={item} className="space-y-6">
            <SuccessMark />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Email verified</h1>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">You're all set — withdrawals are unlocked.</p>
            </div>
            <ButtonLink href={next}>Continue</ButtonLink>
          </motion.div>
        ) : state === "unverified" ? (
          <motion.div variants={item} className="space-y-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Check your inbox</h1>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">We sent a verification link to <span className="text-black">{user.email}</span>. Open it on this device, then come back here.</p>
            </div>
            <OutlineButton onClick={resend} disabled={sent}>{sent ? "Link sent — check your inbox" : "Resend link"}</OutlineButton>
            <p className="text-center"><Link href={next} className="text-sm font-medium text-purple-600 hover:text-purple-700">Continue without verifying</Link></p>
          </motion.div>
        ) : (
          <motion.div variants={item} className="space-y-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sign in to continue</h1>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">Your email may already be verified — sign in and we'll check.</p>
            </div>
            <ButtonLink href={`/sign-in?redirect=${encodeURIComponent(`/verify-email?redirect=${encodeURIComponent(next)}`)}`}>Sign in</ButtonLink>
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}
