"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zh' : 'en');
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 glass-panel m-4 mt-2"
            style={{ maxWidth: '1200px', margin: '20px auto' }}
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" style={{ background: 'linear-gradient(135deg, #2997FF, #BF5AF2)' }}></div>
                <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">AIGameGen</Link>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <Link href="/dashboard" className="hover:text-white transition-colors">{t.nav.dashboard}</Link>
                <Link href="#features" className="hover:text-white transition-colors">{t.nav.features}</Link>
                <Link href="#solutions" className="hover:text-white transition-colors">{t.nav.solutions}</Link>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                >
                    <Globe className="w-4 h-4" />
                    {language === 'en' ? 'EN' : '中'}
                </button>

                <Link href="/demo">
                    <button className="px-6 py-2 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {t.nav.signIn}
                    </button>
                </Link>
                <Link href="/demo">
                    <button className="px-6 py-2 rounded-full text-sm font-semibold bg-white text-black transition-transform hover:scale-105 active:scale-95">
                        {t.nav.start}
                    </button>
                </Link>
            </div>
        </motion.nav>
    );
}
