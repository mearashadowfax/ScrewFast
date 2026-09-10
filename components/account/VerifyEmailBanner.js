"use client";

import { useEffect, useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { toast } from "sonner";
import { MailCheck, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const DISMISS_KEY = "gc.verifyBanner.dismissed";

/** Quiet notice while the account's email is unverified. Only withdrawals depend on it (KB 28). */
export function VerifyEmailBanner() {
  const { user } = useAuth();
  const [hidden, setHidden] = useState(true);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!user) return;
    const passwordAccount = user.providerData?.some((p) => p.providerId === "password");
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(DISMISS_KEY) === "1"; } catch { /* storage blocked */ }
    setHidden(user.emailVerified || !passwordAccount || dismissed);
  }, [user]);

  if (hidden) return null;

  const resend = async () => {
    try {
      await sendEmailVerification(user, { url: `${window.location.origin}/verify-email?redirect=/home` });
      toast.success("Verification link sent");
      setSent(true);
    } catch (e) {
      toast.error(e.code === "auth/too-many-requests" ? "Too many requests — try again in a few minutes." : "Couldn't send the link. Try again.");
    }
  };
  const dismiss = () => {
    try { sessionStorage.setItem(DISMISS_KEY, "1"); } catch { /* ignore */ }
    setHidden(true);
  };

  return (
    <div className="mx-auto mt-6 flex max-w-3xl items-center gap-3 rounded-2xl border border-purple-200 bg-purple-50 px-4 py-3 text-[13px] text-purple-900">
      <MailCheck className="h-4 w-4 shrink-0 text-purple-600" aria-hidden="true" />
      <span className="min-w-0 flex-1">
        Verify your email to withdraw funds.{" "}
        <button type="button" onClick={resend} disabled={sent} className="font-medium text-purple-700 underline-offset-2 hover:underline disabled:no-underline disabled:opacity-60">
          {sent ? "Link sent" : "Resend link"}
        </button>
      </span>
      <button type="button" onClick={dismiss} aria-label="Dismiss" className="rounded-md p-1.5 text-purple-400 hover:text-purple-700"><X className="h-4 w-4" /></button>
    </div>
  );
}
