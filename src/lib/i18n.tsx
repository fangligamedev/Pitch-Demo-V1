"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

const translations = {
    en: {
        nav: {
            features: "Features",
            solutions: "Solutions",
            pricing: "Pricing",
            signIn: "Sign In",
            start: "Start Generating",
            dashboard: "Trend Dashboard"
        },
        hero: {
            punchline_prefix: "The Figma for",
            punchline_suffix: "Mini-Games",
            subhead: "Generate monetizeable interactive content in minutes. Trend → Build → Promote. All in one AI OS.",
            cta_primary: "Start Engine",
            cta_secondary: "Watch Showreel"
        },
        dashboard: {
            title: "Trend Intelligence",
            subtitle: "Real-time analysis of global entertainment trends.",
            stat_heat: "Global Heat Index",
            stat_roi: "Avg. ROI",
            stat_viral: "Viral Coefficient",
            chart_title: "Category Growth (24h)",
            list_title: "Hot Opportunities",
            scan_btn: "Analyze & Generate Idea"
        },
        canvas: {
            trend_node: "Trend Insight",
            trend_desc: "High potential detected in 'Anime AVG' genre.",
            ai_node: "AI Game Engine",
            ai_status: "Generating Assets...",
            asset_node: "Generated Assets",
            preview_node: "Game Preview",
            publish_btn: "Publish"
        }
    },
    zh: {
        nav: {
            features: "功能特性",
            solutions: "解决方案",
            pricing: "价格方案",
            signIn: "登录",
            start: "开始创作",
            dashboard: "数据雷达"
        },
        hero: {
            punchline_prefix: "小游戏生成的",
            punchline_suffix: "Figma",
            subhead: "分钟级生成可变现互动内容。趋势洞察 → 内容构建 → 营销推广。全链路 AI 操作系统。",
            cta_primary: "启动引擎",
            cta_secondary: "观看演示"
        },
        dashboard: {
            title: "趋势情报局",
            subtitle: "全球娱乐趋势实时分析系统。",
            stat_heat: "全网热度指数",
            stat_roi: "平均回报率 (ROI)",
            stat_viral: "病毒传播系数",
            chart_title: "品类增长趋势 (24h)",
            list_title: "热门机会榜单",
            scan_btn: "分析并生成创意"
        },
        canvas: {
            trend_node: "趋势洞察",
            trend_desc: "检测到‘二次元文字冒险’品类具有极高潜力。",
            ai_node: "AI 游戏引擎",
            ai_status: "正在生成资产...",
            asset_node: "已生成资产",
            preview_node: "游戏预览",
            publish_btn: "发布上线"
        }
    }
};

type Translations = typeof translations.en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('zh'); // Default to Chinese as requested

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
