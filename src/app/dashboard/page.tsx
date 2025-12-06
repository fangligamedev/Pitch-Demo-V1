"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import Link from 'next/link';
import { ArrowUpRight, Flame, TrendingUp, Users, Zap } from 'lucide-react';

export default function DashboardPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-12">
            <Navbar />

            <div className="container-wide">
                <header className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-2"
                    >
                        {t.dashboard.title}
                    </motion.h1>
                    <p className="text-gray-400">{t.dashboard.subtitle}</p>
                </header>

                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard icon={<Flame className="text-orange-500" />} label={t.dashboard.stat_heat} value="98.4" trend="+12%" />
                    <StatCard icon={<TrendingUp className="text-green-500" />} label={t.dashboard.stat_roi} value="450%" trend="+5%" />
                    <StatCard icon={<Users className="text-blue-500" />} label={t.dashboard.stat_viral} value="2.4x" trend="+0.3" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Hot List */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                        className="glass-panel p-6 col-span-1"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                {t.dashboard.list_title}
                            </h2>
                            <span className="text-xs text-gray-500">Live Update</span>
                        </div>

                        <div className="space-y-4">
                            <HotItem rank={1} title="Anime AVG / 二次元恋爱" heat="Hot" isNew />
                            <HotItem rank={2} title="Obby Parkour / 跑酷闯关" heat="+24%" />
                            <HotItem rank={3} title="Horror Puzzle / 密室逃脱" heat="+18%" />
                            <HotItem rank={4} title="Pets Sim / 宠物模拟" heat="+12%" />
                            <HotItem rank={5} title="Quiz Battle / 答题对战" heat="+8%" />
                        </div>
                    </motion.div>

                    {/* Right: Charts & Action */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-8">
                        {/* Chart Area */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            className="glass-panel p-8 flex-1 min-h-[400px] relative overflow-hidden"
                        >
                            <h3 className="text-lg font-semibold mb-6">{t.dashboard.chart_title}</h3>

                            {/* Mock Chart Visual */}
                            <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-between px-8 pb-8 gap-4 opacity-80">
                                <ChartBar height="40%" label="00:00" />
                                <ChartBar height="55%" label="04:00" />
                                <ChartBar height="45%" label="08:00" />
                                <ChartBar height="70%" label="12:00" />
                                <ChartBar height="85%" label="16:00" />
                                <ChartBar height="100%" label="20:00" active />
                            </div>

                            {/* Floating Info */}
                            <div className="absolute top-20 right-10 bg-gray-800/80 backdrop-blur p-4 rounded-xl border border-white/10 max-w-xs">
                                <div className="text-xs text-gray-400 mb-1">Current Leader</div>
                                <div className="font-bold text-lg text-white mb-2">Anime AVG</div>
                                <div className="text-sm text-gray-300">
                                    Audience engagement spiked by 240% in the last 4 hours due to new viral mechanism.
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="flex justify-end"
                        >
                            <Link href="/demo">
                                <button className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                    {t.dashboard.scan_btn} <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function StatCard({ icon, label, value, trend }: any) {
    return (
        <div className="glass-panel p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-xl">{icon}</div>
                <span className="text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded">{trend}</span>
            </div>
            <div className="text-3xl font-bold mb-1">{value}</div>
            <div className="text-gray-400 text-sm">{label}</div>
        </div>
    )
}

function HotItem({ rank, title, heat, isNew }: any) {
    return (
        <Link href="/demo" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/10">
            <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${rank <= 3 ? 'bg-white text-black' : 'bg-white/10 text-gray-400'}`}>
                {rank}
            </div>
            <div className="flex-1">
                <div className="font-medium text-white group-hover:text-blue-400 transition-colors">{title}</div>
            </div>
            <div className="text-right">
                <div className={`text-sm font-bold ${isNew ? 'text-red-500' : 'text-green-500'}`}>{heat}</div>
                {isNew && <div className="text-[10px] text-red-500/80 uppercase tracking-wider">Trending</div>}
            </div>
        </Link>
    )
}

function ChartBar({ height, label, active }: any) {
    return (
        <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end group">
            <div className="relative w-full bg-gray-800 rounded-t-lg transition-all duration-500 group-hover:bg-gray-700" style={{ height }}>
                {active && (
                    <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-blue-600 to-purple-500 opacity-80 rounded-t-lg shadow-[0_-10px_40px_rgba(60,100,255,0.4)]" />
                )}
            </div>
            <div className={`text-xs ${active ? 'text-white font-bold' : 'text-gray-600'}`}>{label}</div>
        </div>
    )
}
