"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AnimatedPriceChart } from "@/components/animated-price-chart";
import { AlertCircle, Hexagon, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ── Rotating quotes ── */

const QUOTES = [
  {
    text: "The big money is not in the buying and the selling, but in the waiting.",
    author: "Jesse Livermore",
  },
  {
    text: "Be fearful when others are greedy. Be greedy when others are fearful.",
    author: "Warren Buffett",
  },
  {
    text: "Markets can remain irrational longer than you can remain solvent.",
    author: "John Maynard Keynes",
  },
  {
    text: "Mastering others is strength. Mastering yourself is true power.",
    author: "Laozi",
  },
  {
    text: "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
    author: "Sun Tzu",
  },
  {
    text: "The game of speculation is the most uniformly fascinating game in the world. But it is not a game for the stupid, the mentally lazy, or the get-rich-quick adventurer.",
    author: "Jesse Livermore",
  },
  {
    text: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
  },
  {
    text: "To know others is wisdom; to know yourself is enlightenment.",
    author: "Laozi",
  },
  {
    text: "The individual investor should act consistently as an investor and not as a speculator.",
    author: "Benjamin Graham",
  },
  {
    text: "It's not whether you're right or wrong, but how much money you make when you're right and how much you lose when you're wrong.",
    author: "George Soros",
  },
  {
    text: "All through time, people have basically acted and reacted the same way in the market as a result of greed, fear, ignorance, and hope.",
    author: "Jesse Livermore",
  },
  {
    text: "He who knows when he can fight and when he cannot will be victorious.",
    author: "Sun Tzu",
  },
  {
    text: "In investing, what is comfortable is rarely profitable.",
    author: "Robert Arnott",
  },
  {
    text: "The four most dangerous words in investing are: this time it's different.",
    author: "Sir John Templeton",
  },
  {
    text: "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful.",
    author: "Warren Buffett",
  },
  {
    text: "Knowing others is intelligence; knowing yourself is true wisdom.",
    author: "Laozi",
  },
  {
    text: "The market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett",
  },
  {
    text: "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.",
    author: "Warren Buffett",
  },
  // David Hume
  {
    text: "A wise man proportions his belief to the evidence.",
    author: "David Hume",
  },
  // Diamond Sutra
  {
    text: "All conditioned phenomena are like a dream, an illusion, a bubble, a shadow, like dew or a flash of lightning — thus should we meditate upon them.",
    author: "Diamond Sutra",
  },
  {
    text: "The mind should be kept independent of any thoughts that arise within it. If the mind depends upon anything, it has no sure haven.",
    author: "Diamond Sutra",
  },
  {
    text: "Where there is attachment, there is entanglement. Rely on nothing. Do not abide.",
    author: "Diamond Sutra",
  },
  // Heart Sutra
  {
    text: "Form is emptiness, emptiness is form.",
    author: "Heart Sutra",
  },
  {
    text: "No gain, no loss. No increase, no decrease.",
    author: "Heart Sutra",
  },
  {
    text: "Gone, gone, gone beyond — gone completely beyond. Awakened! So be it.",
    author: "Heart Sutra",
  },
  // Huineng (Zen / Sixth Patriarch)
  {
    text: "Originally there is not a single thing. Where could dust alight?",
    author: "Huineng",
  },
  {
    text: "If you are unable to find the truth right where you are, where else do you expect to find it?",
    author: "Huineng",
  },
  {
    text: "Not thinking about anything is Zen. Once you know this, walking, standing, sitting, or lying down — everything you do is Zen.",
    author: "Huineng",
  },
] as const;

const QUOTE_DURATION_MS = 5500;
const FADE_MS = 650;

function RollingQuote() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % QUOTES.length);
        setVisible(true);
      }, FADE_MS);
    }, QUOTE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const q = QUOTES[index];

  return (
    <blockquote
      className={cn(
        "space-y-3 transition-all duration-[650ms] ease-in-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
    >
      <p className="text-xl font-medium leading-relaxed tracking-tight">&ldquo;{q.text}&rdquo;</p>
      <footer className="font-mono text-sm text-zinc-400">&mdash; {q.author}</footer>
    </blockquote>
  );
}

/* ── Error messages ── */

const ERROR_MESSAGES: Record<string, string> = {
  no_code: "Authentication was cancelled. Please try again.",
  auth_failed: "Authentication failed. Please try again or contact support.",
};

/* ── Login form ── */

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const errorKey = searchParams.get("error");
  const errorMessage = errorKey ? (ERROR_MESSAGES[errorKey] ?? "An unexpected error occurred.") : null;

  function handleLogin() {
    setIsLoading(true);
    window.location.href = "/api/auth/login";
  }

  return (
    <div className="mx-auto flex w-full max-w-[380px] flex-col space-y-8">
      <div className="flex flex-col space-y-2 text-center lg:text-left">
        <div className="mb-6 flex justify-center lg:hidden">
          <Hexagon className="h-10 w-10 text-primary" strokeWidth={2.5} />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Sign in with your organization account to access the terminal
        </p>
      </div>

      {errorMessage && (
        <div className="flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button
        type="button"
        size="lg"
        className="w-full gap-2.5 font-semibold"
        disabled={isLoading}
        onClick={handleLogin}
      >
        <ShieldCheck className="h-4 w-4" />
        {isLoading ? "Redirecting…" : "Continue with Casdoor SSO"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By signing in, you agree to our{" "}
        <Link href={"/terms" as never} className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={"/privacy" as never} className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

/* ── Page ── */

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-stretch overflow-hidden bg-background">
      {/* Left side: animated splash */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-zinc-950 p-10 text-white lg:flex">
        <AnimatedPriceChart />
        {/* Two separate fades so the vortex centre stays unobstructed */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-zinc-950/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-zinc-950/90 to-transparent" />

        <div className="relative z-10 flex items-center gap-2.5">
          <Hexagon className="h-8 w-8 text-primary" strokeWidth={2.5} />
          <span className="font-mono text-xl font-bold tracking-tight uppercase">Quantum Terminal</span>
        </div>

        <div className="relative z-10">
          <RollingQuote />
        </div>
      </div>

      {/* Right side: login */}
      <div className="flex w-full flex-col justify-center px-8 lg:w-1/2 lg:px-24 xl:px-32">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
