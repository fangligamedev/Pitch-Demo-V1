"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Play, Star, Code } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* 1. Hero Section (Overhauled) */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-900/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-8"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">v2.0 Now Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-5xl mx-auto"
          >
            {t.hero.punchline_prefix} <span className="text-gradient-blue">{t.hero.punchline_suffix}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            {t.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link href="/dashboard" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-10 py-5 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
                {t.hero.cta_primary} <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
            <button className="px-10 py-5 glass-panel text-white text-xl font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
              <Play className="w-6 h-6 fill-current" /> {t.hero.cta_secondary}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Waterfall Features (GDevelop Style) */}
      <section className="py-24 container-wide space-y-32" id="features">

        {/* Feature 1: Trend Radar */}
        <FeatureBlock
          badge="Step 1: Trend"
          title="Don't Guess. Know."
          desc="Our radar scans millions of interactions to find the next viral hit before it happens."
          image="/images/feature-trend.png" // Placeholder
          align="left"
          color="blue"
        >
          <div className="bg-gray-900 rounded-xl p-8 border border-white/10 h-[400px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-blue-500 rounded-full animate-[spin_4s_linear_infinite] border-t-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-4xl font-bold">92%</div>
              <div className="text-sm text-blue-400">Match Rate</div>
            </div>
          </div>
        </FeatureBlock>

        {/* Feature 2: Build Engine */}
        <FeatureBlock
          badge="Step 2: Build"
          title="Visual Nodes. Instant Code."
          desc="Drag, drop, and connect. Our AI writes the C# and shader code while you focus on the flow."
          image="/images/feature-build.png" // Placeholder
          align="right"
          color="purple"
        >
          <div className="bg-gray-900 rounded-xl p-8 border border-white/10 h-[400px] relative overflow-hidden flex flex-col gap-4">
            <div className="p-4 bg-white/5 rounded-lg border border-white/5 flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400"><Star className="w-5 h-5" /></div>
              <div className="h-2 w-32 bg-white/10 rounded" />
            </div>
            <div className="ml-8 p-4 bg-white/5 rounded-lg border border-white/5 flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400"><Code className="w-5 h-5" /></div>
              <div className="h-2 w-24 bg-white/10 rounded" />
            </div>
            <div className="ml-16 p-4 bg-white/5 rounded-lg border border-white/5 flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-400"><Play className="w-5 h-5" /></div>
              <div className="h-2 w-40 bg-white/10 rounded" />
            </div>
          </div>
        </FeatureBlock>

        {/* Feature 3: Promote */}
        <FeatureBlock
          badge="Step 3: Promote"
          title="Viral by Design."
          desc="Automatic A/B testing for thumbnails and gameplay hooks. We scale what works."
          image="/images/feature-promote.png" // Placeholder
          align="left"
          color="green"
        >
          <div className="bg-gray-900 rounded-xl p-6 border border-white/10 h-[400px] relative overflow-hidden flex items-end">
            <div className="w-full flex items-end gap-2 h-64 px-4 pb-0">
              <div className="w-1/5 bg-gray-800 rounded-t h-[40%]" />
              <div className="w-1/5 bg-gray-800 rounded-t h-[60%]" />
              <div className="w-1/5 bg-gray-800 rounded-t h-[30%]" />
              <div className="w-1/5 bg-gray-800 rounded-t h-[50%]" />
              <div className="w-1/5 bg-green-500 rounded-t h-[85%] relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-green-400 font-bold">+240%</div>
              </div>
            </div>
          </div>
        </FeatureBlock>

      </section>

      {/* 3. Showcase Grid */}
      <section className="py-24 bg-white/5" id="solutions">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Made with AIGameGen</h2>
            <p className="text-gray-400">Join 10,000+ creators building the next hit.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[600px]">
            <ShowcaseCard title="Cyber Run" author="@neo_dev" color="bg-blue-600" h="h-full" />
            <div className="flex flex-col gap-4 h-full">
              <ShowcaseCard title="Pet Sim" author="@cute_games" color="bg-pink-600" h="h-1/2" />
              <ShowcaseCard title="Space War" author="@mars_studio" color="bg-purple-600" h="h-1/2" />
            </div>
            <ShowcaseCard title="Dungeon AI" author="@rpg_fan" color="bg-red-900" h="h-full" />
            <div className="flex flex-col gap-4 h-full">
              <ShowcaseCard title="Puzzle X" author="@logic_master" color="bg-yellow-600" h="h-2/3" />
              <ShowcaseCard title="Cooking Mama" author="@chef_ai" color="bg-orange-600" h="h-1/3" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center container-wide flex justify-between items-center text-sm text-gray-500">
        <p>© 2025 Interactive Entertainment AI.</p>
        <div className="flex gap-4">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </footer>
    </main>
  );
}

function FeatureBlock({ badge, title, desc, align, color, children }: any) {
  const isRight = align === 'right';
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${isRight ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 space-y-6">
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}>
          {badge}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
        <p className="text-xl text-gray-400 leading-relaxed">{desc}</p>
        <button className="flex items-center gap-2 text-white hover:gap-4 transition-all group font-semibold">
          Learn more <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
        </button>
      </div>
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  )
}

function ShowcaseCard({ title, author, color, h }: any) {
  return (
    <div className={`w-full ${h} rounded-xl overflow-hidden relative group cursor-pointer`}>
      <div className={`absolute inset-0 ${color} opacity-80 transition-transform duration-500 group-hover:scale-110`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-xs text-gray-300">{author}</p>
      </div>
    </div>
  )
}
