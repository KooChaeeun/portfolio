'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiMonitor, FiCode, FiPenTool, FiStar } from 'react-icons/fi';

// ── 슬라이드 데이터: 텍스트 + 태그 세트 ──
const slides = [
    {
        icon: <FiMonitor size={16} />,
        subtitle: 'Welcome to my portfolio',
        tags: ['Designer', 'UIUX', 'Publisher', 'fronted'],
    },
    {
        icon: <FiCode size={16} />,
        subtitle: 'Not Just Visuals, But Validated Code',
        tags: ['JavaScript', 'TypeScript', 'React', 'Tailwind', 'Gsap'],
    },
    {
        icon: <FiPenTool size={16} />,
        subtitle: 'Thinking UX, Building UI',
        tags: ['Figma', 'Photoshop', 'Illustration', 'Indesign', 'AfterEffect'],
    },
    {
        icon: <FiStar size={16} />,
        subtitle: 'Simply Better Experiences',
        tags: ['2+ Years Experience'],
    },
];

const TYPING_TEXT = '디자인 감각을 코드로 실현하는 구채은 입니다.';
const SLIDE_DURATION = 3000;

// ── 타이핑 훅 ──
function useTyping(text: string) {
    // 빈 문자열 대신 전체 텍스트로 초기화 → 초기 레이아웃 높이 확정
    const [displayed, setDisplayed] = useState(text);
    const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('pause');

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (phase === 'typing') {
            if (displayed.length < text.length) {
                // 타이핑 속도: 40~80ms 랜덤으로 사람이 치는 느낌
                const speed = Math.random() * 40 + 35;
                timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
            } else {
                // 다 타이핑되면 3초 멈춤
                timer = setTimeout(() => setPhase('pause'), 3000);
            }
        } else if (phase === 'pause') {
            setPhase('deleting');
        } else {
            // 삭제: 타이핑보다 빠르게
            if (displayed.length > 0) {
                timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
            } else {
                // 다 지워지면 잠깐 쉬었다가 다시 타이핑
                timer = setTimeout(() => setPhase('typing'), 400);
            }
        }

        return () => clearTimeout(timer);
    }, [displayed, phase, text]);

    return { displayed, phase };
}

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [animState, setAnimState] = useState<'enter' | 'exit'>('enter');
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const { displayed, phase } = useTyping(TYPING_TEXT);

    const goNext = () => {
        setAnimState('exit');
        setTimeout(() => {
            setCurrent((i) => (i + 1) % slides.length);
            setAnimState('enter');
        }, 420);
    };

    useEffect(() => {
        timerRef.current = setTimeout(goNext, SLIDE_DURATION);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [current]);

    const slide = slides[current];

    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 24px 80px',
                overflow: 'hidden',
                textAlign: 'center',
            }}
        >
            {/* ── 배경 ── */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,1) 100%)',
                    }}
                />
                <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 1 }} />
                <div
                    style={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background:
                            'radial-gradient(circle, rgba(108,92,231,0.07) 0%, transparent 100%)',
                    }}
                />
            </div>

            {/* ── 콘텐츠 ── */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '780px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    animation: 'fadeInUp 0.8s ease both',
                }}
            >
                {/* 동그라미 아바타 */}
                <div style={{ marginBottom: '28px', animation: 'float 4s ease-in-out infinite' }}>
                    <div style={{ position: 'relative', width: '160px', height: '160px' }}>
                        <div
                            style={{
                                position: 'absolute',
                                inset: '-3px',
                                borderRadius: '50%',
                                background: 'var(--accent)',
                                zIndex: 0,
                            }}
                        />
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                background: 'var(--bg2)',
                                zIndex: 1,
                            }}
                        >
                            <Image
                                src="/avatar-wh.jpg"
                                alt="구채은 증명사진"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* ── 타이틀: 안녕하세요, [타이핑] ── */}
                <div style={{ marginBottom: '36px', width: '100%' }}>
                    {/* 정적 첫 줄 */}
                    <h1
                        style={{
                            fontFamily: "'Pretendard', sans-serif",
                            fontSize: 'clamp(1.8rem, 4.5vw, 3.8rem)',
                            fontWeight: 600,
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            color: 'var(--muted)',
                            marginBottom: '8px',
                        }}
                    >
                        안녕하세요,
                    </h1>

                    {/* 타이핑 줄 — inline-block 컨테이너로 커서가 텍스트 끝에 붙도록 */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '1.4em',
                            width: '100%',
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: "'Pretendard', sans-serif",
                                fontSize: 'clamp(1.2rem, 4vw, 3.8rem)',
                                fontWeight: 800,
                                lineHeight: 1.25,
                                letterSpacing: '-0.02em',
                                margin: 0,
                                display: 'inline',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <span
                                style={{
                                    background: 'var(--accent)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {displayed}
                            </span>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '2px',
                                    height: '0.85em',
                                    background: 'var(--accent)',
                                    marginLeft: '4px',
                                    borderRadius: '2px',
                                    verticalAlign: 'baseline',
                                    animation: 'blink 1s step-end infinite',
                                    opacity: phase === 'pause' ? 1 : 0,
                                }}
                            />
                        </h2>
                    </div>
                </div>

                {/* ── 자동 루프 슬라이드 (subtitle + 태그) ── */}
                <div
                    style={{
                        minHeight: '110px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                        marginBottom: '44px',
                        width: '100%',
                    }}
                >
                    {/* 서브타이틀 */}
                    <p
                        key={`subtitle-${current}`}
                        className={`hero-slide-${animState}`}
                        style={{
                            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                            color: 'var(--muted)',
                            letterSpacing: '0.03em',
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                        }}
                    >
                        <span
                            style={{
                                color: 'var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {slide.icon}
                        </span>
                        {slide.subtitle}
                    </p>

                    {/* 태그 칩 */}
                    <div
                        key={`tags-${current}`}
                        className={`hero-slide-${animState}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '8px',
                        }}
                    >
                        {slide.tags.map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    fontSize: '0.78rem',
                                    fontWeight: 600,
                                    padding: '5px 16px',
                                    borderRadius: '20px',
                                    background: 'var(--tag-bg)',
                                    border: '1px solid var(--tag-border)',
                                    color: 'var(--tag-text)',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* 슬라이드 인디케이터 도트 */}
                    {/* <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    if (timerRef.current) clearTimeout(timerRef.current);
                                    setAnimState('exit');
                                    setTimeout(() => {
                                        setCurrent(i);
                                        setAnimState('enter');
                                    }, 420);
                                }}
                                style={{
                                    width: i === current ? '20px' : '6px',
                                    height: '6px',
                                    borderRadius: '3px',
                                    background: i === current ? 'var(--accent)' : 'var(--border2)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    transition: 'width 0.3s ease, background 0.3s ease',
                                }}
                            />
                        ))}
                    </div> */}
                </div>

                {/* 버튼 */}
                <div
                    style={{
                        display: 'flex',
                        gap: '14px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    <a href="#projects" className="btn-primary">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <path d="M8 21h8M12 17v4" />
                        </svg>
                        View Projects
                    </a>
                    <a href="#about" className="btn-secondary">
                        About Me
                    </a>
                </div>
            </div>
        </section>
    );
}
