"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Share, Code, BarChart3, Wand2, User, Image as ImageIcon, MessageSquare } from 'lucide-react';

export default function CanvasWorkbench() {
    const [stage, setStage] = useState<'trend' | 'build' | 'promote'>('trend');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedAssets, setGeneratedAssets] = useState(false);

    // Simulation handlers
    const handleAnalyze = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setStage('build');
        }, 2000);
    };

    const handleGenerateAssets = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setGeneratedAssets(true);
        }, 3000); // Longer for dramatic effect
    };

    const handlePromote = () => {
        setStage('promote');
    }

    return (
        <div className="flex h-screen bg-black text-white overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-20 border-r border-white/10 flex flex-col items-center py-8 gap-8 bg-[#0a0a0a]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8" />

                <NavIcon icon={<BarChart3 />} active={stage === 'trend'} onClick={() => setStage('trend')} label="Trend" />
                <NavIcon icon={<Code />} active={stage === 'build'} onClick={() => setStage('build')} label="Build" />
                <NavIcon icon={<Share />} active={stage === 'promote'} onClick={() => setStage('promote')} label="Promote" />
            </div>

            {/* Main Workbench Area */}
            <div className="flex-1 relative bg-neutral-900/50">
                <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none" />

                <div className="p-8 h-full">
                    <AnimatePresence mode="wait">
                        {stage === 'trend' && (
                            <TrendView key="trend" onAnalyze={handleAnalyze} isScanning={isGenerating} />
                        )}
                        {stage === 'build' && (
                            <BuildCanvas key="build" onGenerate={handleGenerateAssets} isGenerating={isGenerating} hasAssets={generatedAssets} onPromote={handlePromote} />
                        )}
                        {stage === 'promote' && (
                            <PromoteView key="promote" />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

function NavIcon({ icon, active, onClick, label }: any) {
    return (
        <button
            onClick={onClick}
            className={`p-3 rounded-xl transition-all relative group ${active ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
        >
            {icon}
            {active && <motion.div layoutId="nav-glow" className="absolute inset-0 bg-blue-500/20 blur-lg rounded-xl" />}
            <span className="absolute left-14 bg-gray-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {label}
            </span>
        </button>
    )
}

function TrendView({ onAnalyze, isScanning }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto"
        >
            <h2 className="text-3xl font-bold mb-8">Trend Radar</h2>

            <div className="relative w-[500px] h-[500px] border border-white/10 rounded-full flex items-center justify-center mb-8 bg-black/40 backdrop-blur-sm">
                {/* Radar Scanner Animation */}
                {isScanning && (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent w-1/2 h-full left-1/2 origin-left border-l border-green-500/50"
                        style={{ borderTopRightRadius: '100%', borderBottomRightRadius: '100%' }}
                    />
                )}

                {/* Static grid lines */}
                <div className="absolute inset-x-0 top-1/2 border-t border-white/5" />
                <div className="absolute inset-y-0 left-1/2 border-l border-white/5" />
                <div className="absolute w-2/3 h-2/3 border border-white/5 rounded-full" />
                <div className="absolute w-1/3 h-1/3 border border-white/5 rounded-full" />

                {!isScanning && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-1/3 right-1/4">
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute" />
                        <div className="w-4 h-4 bg-red-500 rounded-full relative" />
                        <div className="absolute top-6 left-0 bg-black/80 px-3 py-1 rounded border border-red-500/50 text-xs whitespace-nowrap">
                            Hot: Anime AVG
                        </div>
                    </motion.div>
                )}
            </div>

            <button
                onClick={onAnalyze}
                disabled={isScanning}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold transition-all disabled:opacity-50"
            >
                {isScanning ? 'Analyzing Market Data...' : 'Scan for Opportunities'}
            </button>
        </motion.div>
    )
}

function BuildCanvas({ onGenerate, isGenerating, hasAssets, onPromote }: any) {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="h-full flex flex-col"
        >
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold">Game Builder</h2>
                    <p className="text-gray-400 text-sm">Project: "Summer Memories" (AVG Template)</p>
                </div>
                <div className="flex gap-4">
                    {!hasAssets && (
                        <button
                            onClick={onGenerate}
                            disabled={isGenerating}
                            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:brightness-110 transition-all font-medium"
                        >
                            <Wand2 className="w-4 h-4" />
                            {isGenerating ? 'Generating Assets...' : 'Generate Assets'}
                        </button>
                    )}
                    {hasAssets && (
                        <button
                            onClick={onPromote}
                            className="flex items-center gap-2 px-6 py-2 bg-green-600 rounded-lg hover:bg-green-500 transition-all font-medium"
                        >
                            <Play className="w-4 h-4" /> Publish & Promote
                        </button>
                    )}
                </div>
            </header>

            <div className="flex-1 relative border border-white/10 rounded-2xl bg-[#111] overflow-hidden flex items-center justify-center">
                {/* Empty State */}
                {!hasAssets && !isGenerating && (
                    <div className="text-center text-gray-500">
                        <Code className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>Canvas Empty. Generate assets to begin.</p>
                    </div>
                )}

                {/* Loading/Generating */}
                {isGenerating && (
                    <div className="font-mono text-sm text-green-400 space-y-2 p-8 w-full max-w-lg bg-black/50 rounded-xl border border-white/10">
                        <TypingEffect text="> Initializing Neural Engine..." delay={0} />
                        <TypingEffect text="> Generating Character Sprite (Seed: 4892)..." delay={500} />
                        <TypingEffect text="> Synthesizing Background: 'School Classroom'..." delay={1500} />
                        <TypingEffect text="> Composing Dialog Scripts..." delay={2200} />
                    </div>
                )}

                {/* Generated Result (Simulating Doki Doki) */}
                {hasAssets && !isGenerating && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full h-full max-w-4xl max-h-[600px] bg-gray-800 rounded shadow-2xl overflow-hidden border border-gray-700"
                    >
                        {/* Background */}
                        <div className="absolute inset-0 bg-yellow-100/10">
                            {/* Simulated classroom bg */}
                            <div className="w-full h-full bg-[url('https://placehold.co/800x600/222/444')] bg-cover bg-center" style={{ backgroundColor: '#2a2a3a' }} />
                            <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-5 font-black">BG</div>
                        </div>

                        {/* Character */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-80 h-[400px] md:h-[500px]"
                        >
                            {/* SVG Character Placeholder */}
                            <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-2xl">
                                <path d="M50 20 C 30 20, 20 50, 20 70 L 20 200 L 80 200 L 80 70 C 80 50, 70 20, 50 20" fill="#FFB7C5" />
                                <circle cx="50" cy="40" r="15" fill="#FFE0BD" />
                                <rect x="35" y="70" width="30" height="130" fill="#4A90E2" />
                            </svg>
                        </motion.div>

                        {/* Dialog Box */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-8 left-8 right-8 h-32 bg-pink-500/90 rounded-xl border-4 border-white shadow-lg p-6 flex flex-col"
                        >
                            <span className="font-bold text-white text-lg mb-1 drop-shadow-md">Monika (AI)</span>
                            <p className="text-white font-medium drop-shadow-md">"Welcome to the Generated World! I created this entire game in 3.4 seconds."</p>
                            <div className="mt-auto ml-auto text-xs text-white/80 animate-pulse">Click to continue ▼</div>
                        </motion.div>

                        {/* UI Overlay */}
                        <div className="absolute top-4 left-4 flex gap-2">
                            <div className="bg-black/50 px-3 py-1 rounded text-xs text-white">AUTOSAVE</div>
                            <div className="bg-black/50 px-3 py-1 rounded text-xs text-white">DEBUG MODE</div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

function PromoteView() {
    return (
        <motion.div className="h-full flex items-center justify-center text-center">
            <div className="max-w-2xl">
                <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Share className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Campaign Live!</h2>
                <p className="text-gray-400 mb-8">
                    Your game is being distributed across 12 channels.
                    <br />
                    Estimated interactions in 24h: <span className="text-white font-bold">14,200</span>
                </p>

                <div className="grid grid-cols-3 gap-4">
                    <StatCard label="Share Rate" value="12.4%" trend="+2.4%" />
                    <StatCard label="Avg. Playtime" value="2m 40s" trend="+40s" />
                    <StatCard label="Conv. Rate" value="4.8%" trend="+1.2%" />
                </div>
            </div>
        </motion.div>
    )
}

function StatCard({ label, value, trend }: any) {
    return (
        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-gray-400 text-xs mb-1">{label}</div>
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-green-400 text-xs">{trend} vs target</div>
        </div>
    )
}

function TypingEffect({ text, delay }: any) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplayed(text);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    if (!displayed) return null;
    return <div className="animate-in fade-in slide-in-from-left-2 duration-300">{displayed}</div>
}
