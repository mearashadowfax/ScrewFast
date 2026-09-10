"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Compass, FolderOpen, Plus, ShieldCheck } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AppShell from "@/components/app/AppShell";
import { Bars, Ring, StatCard, useCountUp } from "@/components/home/Charts";
import { Skeleton, TextLink } from "@/components/ui/Bits";
import { STAGGER, useRevealVariants } from "@/lib/motion";
import { PullToRefresh } from "@/components/ui/PullToRefresh";
import { money, plural } from "@/lib/format";
import { useAsync } from "@/lib/useAsync";
import { getHomeSummary } from "@/lib/data/home";
import { getAdminSummary } from "@/lib/data/admin";
import { VerifyEmailBanner } from "@/components/account/VerifyEmailBanner";

function greetingFor(date) {
  const hour = date.getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

// Rendered only inside AppShell, so the clock never reaches the server render.
function Greeting({ name }) {
  return (
    <>
      {greetingFor(new Date())}
      {name ? `, ${name}` : ""}.
    </>
  );
}

function ActionCard({ href, icon: Icon, title, text, cta, variants }) {
  return (
    <motion.div variants={variants}>
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-black/[0.08] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-600 active:scale-[0.98]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{text}</p>
        <span className="mt-6 flex items-center gap-1 text-sm font-medium text-purple-600">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </Link>
    </motion.div>
  );
}

function AdminCard({ stats, variants }) {
  const line = stats
    ? [
        stats.auditToday != null && `${plural(stats.auditToday, "audit event")} today`,
        stats.catalogueActive != null && `${plural(stats.catalogueActive, "live experience")}`,
        stats.publicPreviews != null && `${plural(stats.publicPreviews, "invite preview")} today`,
      ].filter(Boolean).join(" · ")
    : "Loading…";
  return (
    <motion.div variants={variants}>
      <Link
        href="/admin"
        className="group flex items-center gap-5 rounded-2xl border border-black/[0.08] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-600 active:scale-[0.98]"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[17px] font-semibold tracking-tight">Admin console</span>
          <span className="mt-0.5 block truncate text-sm text-gray-500">{line}</span>
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 text-purple-600 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}

function GlanceSkeleton() {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded-2xl border border-black/[0.08] p-5">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="mt-3 h-7 w-28" />
          <Skeleton className="mt-2 h-3 w-24" />
          <Skeleton className="mt-5 h-14 w-full" />
        </div>
      ))}
    </div>
  );
}

function Glance({ summary, variants }) {
  const { pooled, contributions, invites, errors } = summary;
  const pct = useCountUp(Math.round(pooled.fraction * 100));
  const contributed = useCountUp(contributions.total);
  const inviteCount = invites ? invites.length : 0;
  const invitesN = useCountUp(inviteCount);

  return (
    <motion.section variants={variants} className="mt-16">
      <h2 className="text-sm font-medium text-gray-500">At a glance</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Pooled"
          value={pooled.count ? `${Math.round(pct)}%` : "—"}
          sub={
            errors.plans
              ? "Couldn't load plans"
              : pooled.count
                ? `${money(pooled.balance, pooled.currency)} of ${money(pooled.target, pooled.currency)}`
                : "No pooled plans yet"
          }
          aside={<Ring value={pooled.fraction} />}
        />
        <StatCard
          label="Contributed"
          value={money(Math.round(contributed), pooled.currency)}
          sub={contributions.partial ? `${contributions.year} · latest plans` : `${contributions.year}`}
        >
          <Bars values={contributions.months.some((m) => m > 0) ? contributions.months : contributions.months.map(() => 0)} />
        </StatCard>
        <StatCard
          label="Invites"
          value={invites ? Math.round(invitesN) : "—"}
          sub={errors.invites ? "Couldn't load invites" : inviteCount ? "waiting for you" : "You're all caught up"}
        >
          {inviteCount > 0 && <TextLink href="/notifications">Review invites →</TextLink>}
        </StatCard>
      </div>
    </motion.section>
  );
}

export default function Home() {
  const { user, profile, logout, isAdmin } = useAuth();
  const router = useRouter();
  const item = useRevealVariants();
  const [signingOut, setSigningOut] = useState(false);
  const { data: summary, loading, reload } = useAsync(() => getHomeSummary(user?.uid), [user?.uid], { enabled: !!user });
  const { data: adminStats, reload: reloadAdmin } = useAsync(() => getAdminSummary(), [isAdmin], { enabled: !!user && isAdmin });

  const firstName = (profile?.displayName || user?.displayName || "").trim().split(" ")[0];
  const planCount = summary?.plans?.length;
  const inviteCount = summary?.invites?.length;

  const actions = [
    { href: "/plans/new", icon: Plus, title: "Create a plan", text: "Start one and invite your group.", cta: "Create" },
    { href: "/discover", icon: Compass, title: "Discover", text: "Curated plans, ready to join.", cta: "Browse" },
    {
      href: "/plans",
      icon: FolderOpen,
      title: "Your plans",
      text: planCount == null ? "Everything you're part of." : planCount ? plural(planCount, "plan") + (inviteCount ? ` · ${plural(inviteCount, "invite")}` : "") : "Nothing yet — start one.",
      cta: "View all",
    },
  ];

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await logout();
      router.replace("/");
    } finally {
      setSigningOut(false);
    }
  };

  return (
    <AppShell
      trailing={
        <button
          type="button"
          onClick={handleSignOut}
          disabled={signingOut}
          className="py-2 text-sm text-gray-500 transition-colors duration-300 hover:text-black disabled:opacity-50"
        >
          {signingOut ? "Signing out…" : "Sign out"}
        </button>
      }
    >
      <PullToRefresh onRefresh={() => Promise.all([reload(), isAdmin ? reloadAdmin() : null])}>
      <div className="px-6"><VerifyEmailBanner /></div>
      <motion.div className="mx-auto max-w-3xl px-6 pb-32 pt-12 sm:pb-24 sm:pt-24" variants={STAGGER} initial="hidden" animate="show">
        <motion.p variants={item} className="text-sm font-medium text-gray-500">
          Home
        </motion.p>
        <motion.h1 variants={item} className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          <Greeting name={firstName} />
        </motion.h1>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {actions.map((a) => (
            <ActionCard key={a.href} {...a} variants={item} />
          ))}
        </div>

        {isAdmin && (
          <div className="mt-4">
            <AdminCard stats={adminStats} variants={item} />
          </div>
        )}

        {loading || !summary ? (
          <motion.section variants={item} className="mt-16">
            <h2 className="text-sm font-medium text-gray-500">At a glance</h2>
            <GlanceSkeleton />
          </motion.section>
        ) : (
          <Glance summary={summary} variants={item} />
        )}
      </motion.div>
      </PullToRefresh>
    </AppShell>
  );
}
