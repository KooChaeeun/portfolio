'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import Link from 'next/link';

const navLinks = [
    { label: 'Projects', href: '/#projects' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 32px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.4s ease',
    };

    return (
        <>
            <nav style={navStyle}>
                {/* 로고 */}
                <Link
                    href="/"
                    style={{ textDecoration: 'none' }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        // URL을 /로 유지
                        history.pushState(null, '', '/');
                    }}
                >
                    <div
                        style={{
                            fontSize: '1rem',
                            fontWeight: 800,
                            color: 'var(--text)',
                            lineHeight: 1.15,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        KooChaeEun
                    </div>
                    <div
                        style={{
                            fontSize: '0.63rem',
                            color: 'var(--muted)',
                            fontWeight: 400,
                            letterSpacing: '0.04em',
                        }}
                    >
                        Designer & UI Developer
                    </div>
                </Link>

                {/* 데스크탑 메뉴 */}
                <div
                    className="desktop-nav"
                    style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            style={{
                                color: 'var(--muted)',
                                textDecoration: 'none',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                padding: '8px 14px',
                                borderRadius: '6px',
                                transition: 'color 0.2s, background 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--text)';
                                e.currentTarget.style.background = 'var(--bg2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--muted)';
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Resume 버튼 (수정 완료) */}
                    <a
                        href="/구채은_이력서.pdf"
                        download="구채은_이력서.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            padding: '9px 18px',
                            fontSize: '0.8rem',
                            marginLeft: '8px',
                        }}
                    >
                        Resume
                    </a>
                </div>

                {/* 모바일 버튼 */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="mobile-menu-btn"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        color: 'var(--text)',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            width: '22px',
                            height: '2px',
                            background: 'var(--text)',
                            marginBottom: '5px',
                            transition: 'all 0.3s',
                            transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none',
                        }}
                    />
                    <div
                        style={{
                            width: '22px',
                            height: '2px',
                            background: 'var(--text)',
                            marginBottom: '5px',
                            transition: 'all 0.3s',
                            opacity: menuOpen ? 0 : 1,
                        }}
                    />
                    <div
                        style={{
                            width: '22px',
                            height: '2px',
                            background: 'var(--text)',
                            transition: 'all 0.3s',
                            transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
                        }}
                    />
                </button>
            </nav>

            {/* 모바일 메뉴 */}
            {menuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '64px',
                        left: 0,
                        right: 0,
                        zIndex: 999,
                        background: 'var(--bg)',
                        borderBottom: '1px solid var(--border)',
                        padding: '16px 32px 24px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: 'block',
                                color: 'var(--text2)',
                                textDecoration: 'none',
                                padding: '12px 0',
                                borderBottom: '1px solid var(--border)',
                                fontSize: '0.875rem',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* ✅ 모바일 Resume 버튼 */}
                    <a
                        href="/Augusto_Polonio_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            marginTop: '16px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        Resume
                    </a>
                </div>
            )}

            {/* 반응형 */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
}
