"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimatedPriceChart } from "@/components/animated-price-chart";
import { AlertCircle, Hexagon, ShieldCheck, Lock } from "lucide-react";
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

/* ── Chinese quotes — faithful to source texts and standard translations ── */

const ZH_QUOTES = [
  // Jesse Livermore《股票大作手回忆录》Edwin Lefèvre 著
  { text: "大钱不在买买卖卖，而在等待。", author: "杰西·利弗莫尔" },
  // Warren Buffett
  { text: "别人贪婪时我恐惧，别人恐惧时我贪婪。", author: "沃伦·巴菲特" },
  // John Maynard Keynes
  { text: "市场保持非理性的时间，可以远比你保持不破产的时间更长。", author: "约翰·梅纳德·凯恩斯" },
  // Laozi《道德经》第三十三章
  { text: "胜人者有力，自胜者强。", author: "老子《道德经》" },
  // Sun Tzu《孙子兵法·形篇》
  { text: "胜兵先胜而后求战，败兵先战而后求胜。", author: "孙子《孙子兵法》" },
  // Jesse Livermore
  { text: "投机是世界上最令人着迷的游戏。但它不适合愚蠢之人、精神懈怠之人，或急于求富的冒险家。", author: "杰西·利弗莫尔" },
  // Warren Buffett
  { text: "风险来自于你不知道自己在做什么。", author: "沃伦·巴菲特" },
  // Laozi《道德经》第三十三章
  { text: "知人者智，自知者明。", author: "老子《道德经》" },
  // Benjamin Graham《聪明的投资者》
  { text: "个人投资者应始终以投资者而非投机者的身份行事。", author: "本杰明·格雷厄姆《聪明的投资者》" },
  // George Soros
  { text: "重要的不是你对还是错，而是你对的时候赚了多少，错的时候亏了多少。", author: "乔治·索罗斯" },
  // Jesse Livermore
  { text: "古往今来，人们在市场中的行为方式基本如出一辙，皆受贪婪、恐惧、无知与希望所驱使。", author: "杰西·利弗莫尔" },
  // Sun Tzu《孙子兵法·谋攻篇》
  { text: "知可以战与不可以战者，胜。", author: "孙子《孙子兵法》" },
  // Robert Arnott
  { text: "在投资中，令人舒适的选择，鲜少带来丰厚回报。", author: "罗伯特·阿诺特" },
  // Sir John Templeton
  { text: "投资中最危险的四个字是：这次不同了。", author: "约翰·邓普顿爵士" },
  // Warren Buffett
  { text: "告诉你在华尔街致富的秘诀——在别人恐惧时，你要贪婪。", author: "沃伦·巴菲特" },
  // Laozi《道德经》第三十三章（同上）
  { text: "知人者智，自知者明。", author: "老子《道德经》" },
  // Warren Buffett
  { text: "市场是将钱从急躁者手中转移到有耐心者手中的工具。", author: "沃伦·巴菲特" },
  // Warren Buffett
  { text: "机遇难得。天降黄金之时，当备水桶，而非顶针。", author: "沃伦·巴菲特" },
  // David Hume《人类理解研究》
  { text: "智者依证据的分量来衡量自己的信念。", author: "大卫·休谟《人类理解研究》" },
  // 《金刚经》鸠摩罗什译（402年）
  { text: "一切有为法，如梦幻泡影，如露亦如电，应作如是观。", author: "《金刚经》" },
  // 《金刚经》
  { text: "应无所住，而生其心。", author: "《金刚经》" },
  // 《金刚经》
  { text: "不取于相，如如不动。", author: "《金刚经》" },
  // 《心经》玄奘译（660年）
  { text: "色即是空，空即是色。", author: "《心经》" },
  // 《心经》
  { text: "不生不灭，不垢不净，不增不减。", author: "《心经》" },
  // 《心经》般若波罗蜜多咒
  { text: "揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。", author: "《心经》" },
  // 惠能《六祖坛经》
  { text: "本来无一物，何处惹尘埃。", author: "惠能《六祖坛经》" },
  // 惠能《六祖坛经》
  { text: "佛法在世间，不离世间觉；离世觅菩提，恰如求兔角。", author: "惠能《六祖坛经》" },
  // 惠能《六祖坛经》无念法门
  { text: "无念为宗，无相为体，无住为本。", author: "惠能《六祖坛经》" },
] as const;

const QUOTE_DURATION_MS = 5500;
const FADE_MS = 650;

function RollingQuote() {
  const locale = useLocale();
  const quotes = locale === "zh" ? ZH_QUOTES : QUOTES;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % quotes.length);
        setVisible(true);
      }, FADE_MS);
    }, QUOTE_DURATION_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const q = quotes[index];

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

/* ── Login form ── */

function LoginForm() {
  const t = useTranslations("login");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const errorKey = searchParams.get("error");
  const knownErrors = ["no_code", "auth_failed"] as const;
  const errorMessage = errorKey
    ? knownErrors.includes(errorKey as (typeof knownErrors)[number])
      ? t(`errors.${errorKey as (typeof knownErrors)[number]}`)
      : t("errors.unexpected")
    : null;

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
        <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
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
        {isLoading ? t("signingIn") : t("signIn")}
      </Button>

      <div className="flex items-start gap-2 rounded-md border border-amber-500/20 bg-amber-500/5 px-3 py-2.5 text-[11px] leading-relaxed text-amber-700/80 dark:text-amber-400/70">
        <Lock className="mt-0.5 h-3 w-3 shrink-0" />
        <span>{t("restricted")}</span>
      </div>
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
