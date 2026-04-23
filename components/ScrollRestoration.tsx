'use client';

import { useEffect } from 'react';

const STORAGE_PREFIX = 'scroll-position:';

export default function ScrollRestoration() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const key = `${STORAGE_PREFIX}${window.location.pathname}${window.location.search}${window.location.hash}`;
        const html = document.documentElement;
        const originalScrollBehavior = html.style.scrollBehavior;

        const restoreScroll = () => {
            const saved = window.sessionStorage.getItem(key);
            if (!saved) return;

            const y = Number(saved);
            if (Number.isFinite(y)) {
                // Prevent smooth scrolling animation during restoration.
                html.style.scrollBehavior = 'auto';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        window.scrollTo(0, y);
                        html.style.scrollBehavior = originalScrollBehavior;
                    });
                });
            }
        };

        const saveScroll = () => {
            window.sessionStorage.setItem(key, String(window.scrollY));
        };

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        restoreScroll();
        window.addEventListener('pagehide', saveScroll);
        window.addEventListener('beforeunload', saveScroll);

        return () => {
            html.style.scrollBehavior = originalScrollBehavior;
            window.removeEventListener('pagehide', saveScroll);
            window.removeEventListener('beforeunload', saveScroll);
        };
    }, []);

    return null;
}
