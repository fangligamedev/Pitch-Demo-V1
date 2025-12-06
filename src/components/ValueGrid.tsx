"use client";
import { motion } from 'framer-motion';

export default function ValueGrid() {
    return (
        <section className="py-24 px-4 container-wide" id="features">
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Total Control. <span className="text-gray-500">Zero Friction.</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    The only platform that unifies trend spotting, game generation, and viral marketing into a single workflow.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                {/* Large Card 1 - Game Engine (Trend -> Build) */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="md:col-span-2 md:row-span-1 glass-panel p-8 md:p-12 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-2">AI Play Game Engine</h3>
                        <p className="text-gray-400 max-w-md">
                            Our proprietary engine turns prompts into playable demos in 3-7 minutes.
                            Average cost drops from $5,000 to just $50.
                        </p>
                    </div>
                    <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
                    {/* Conceptual Code visual */}
                    <div className="absolute bottom-8 right-8 p-4 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 font-mono text-xs text-green-400 w-64 md:w-80 opacity-80 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                        <p>{`> Generating Assets... OK`}</p>
                        <p>{`> Compiling Logic... OK`}</p>
                        <p className="text-blue-400">{`> Build Complete. (340ms)`}</p>
                    </div>
                </motion.div>

                {/* Tall Card - Marketing */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="md:col-span-1 md:row-span-2 glass-panel p-8 relative overflow-hidden flex flex-col justify-end group"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
                    <div className="relative z-10 mt-auto">
                        <h3 className="text-3xl font-bold mb-2">Viral Promote</h3>
                        <p className="text-gray-400">
                            Automated A/B testing for creatives. Increase share rates by 2.4x automatically.
                        </p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" />
                </motion.div>

                {/* Wide Card - Trend Radar */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="md:col-span-2 md:row-span-1 glass-panel p-8 md:p-12 relative overflow-hidden group"
                >
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">Trend Radar</h3>
                            <p className="text-gray-400 max-w-md">
                                Don't guess. Know. Analyze millions of social interactions to predict the next hit gameplay.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <div className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm">
                                ↑ 89% Opportunity
                            </div>
                            <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm">
                                Anime Stylization
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
