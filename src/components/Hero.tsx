"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Layers } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-20 overflow-hidden text-center px-4">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full opacity-10 blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500 rounded-full opacity-10 blur-[100px] translate-x-20 -translate-y-20" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10"
            >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">AI Interactive Entertainment Platform</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-5xl mx-auto"
            >
                <span className="block text-gradient">The Figma for</span>
                <span className="block text-gradient-blue">Mini-Games</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
                Generate monetizeable interactive content in minutes. <br />
                <span className="text-white">Trend → Build → Promote.</span> All in one AI OS.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-4"
            >
                <Link href="/demo" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full text-lg overflow-hidden transition-all hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                        Start Engine <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                </Link>
                <button className="px-8 py-4 glass-panel text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-colors">
                    Watch Showreel
                </button>
            </motion.div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
                <FeatureCard
                    icon={<TrendingUp className="w-6 h-6 text-blue-400" />}
                    title="Trend Radar"
                    desc="Spot viral trends instantly."
                    delay={0.8}
                />
                <FeatureCard
                    icon={<Layers className="w-6 h-6 text-purple-400" />}
                    title="AI Build Engine"
                    desc="1/10th Cost, 50x Speed."
                    delay={0.9}
                />
                <FeatureCard
                    icon={<Zap className="w-6 h-6 text-yellow-400" />}
                    title="Viral Promote"
                    desc="Automated growth marketing."
                    delay={1.0}
                />
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.6 }}
            className="p-6 glass-panel flex flex-col gap-4 hover:bg-white/5 transition-colors"
        >
            <div className="p-3 bg-white/5 rounded-xl w-fit border border-white/10">{icon}</div>
            <div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
            </div>
        </motion.div>
    )
}
