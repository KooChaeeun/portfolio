'use client';
import Image from 'next/image';

const bioCards = [
    {
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#534AB7"
                strokeWidth="2"
            >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
        iconBg: '#EEEDFE',
        title: '인천대학교 · UIUX 디자인 전공',
        desc: '디자인학부에서 사용자 경험 설계를 전공하며 시각적 사고와 UX 원칙을 체계적으로 학습했습니다.',
    },
    {
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0F6E56"
                strokeWidth="2"
            >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        iconBg: '#E1F5EE',
        title: 'IT 솔루션 기업 · 퍼블리셔 2년 이상',
        desc: '동영상 스트리밍, 온라인 강의, 대량 메시징, 설문조사, SaaS 등 다양한 B2B 서비스의 반응형 디자인 및 퍼블리싱을 담당했습니다.',
    },
    {
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#185FA5"
                strokeWidth="2"
            >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        iconBg: '#E6F1FB',
        title: '웹 프론트엔드 부트캠프 · 기술 확장',
        desc: '약 6개월간 React, TypeScript, Tailwind, Zustand, GSAP을 집중 학습하고 Copilot · Windsurf · Cursor 등 생성형 AI 도구를 실무에 적용하는 역량을 키웠습니다.',
    },
    {
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#854F0B"
                strokeWidth="2"
            >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        iconBg: '#FAEEDA',
        title: '디자인 × 개발 · 유연한 협업 능력',
        desc: '디자인 전공 지식과 실무 코딩 경험을 바탕으로 사용자 이탈률을 낮추는 UX를 설계하고, 개발자와 유연하게 소통하며 의견을 조율할 수 있습니다.',
    },
];

const tags = [
    { label: 'UIUX 디자인 전공', bg: '#EEEDFE', color: '#534AB7' },
    { label: '퍼블리셔', bg: '#E1F5EE', color: '#0F6E56' },
    { label: 'React · TypeScript', bg: '#E6F1FB', color: '#185FA5' },
    { label: 'AI 활용', bg: '#FAEEDA', color: '#854F0B' },
];

const stats = [
    { num: '2+', unit: 'Years', label: '퍼블리셔 실무 경험', color: '#7F77DD' },
    { num: '6+', unit: 'Months', label: '프론트엔드 부트캠프', color: '#1D9E75' },
];

const responsiveCSS = `
@media (max-width: 768px) {
  .about-section { padding: 40px 20px 60px !important; }
  .about-heading { margin-bottom: 32px !important; }
  .about-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
  .about-left-col { display: flex; flex-direction: column; align-items: center; }
  .about-stats-wrap { flex-direction: row !important; width: 100%; max-width: 340px; gap: 10px !important; }
  .about-stat-card { flex: 1; width: auto !important; padding: 14px 10px !important; }
}
@media (max-width: 380px) {
  .about-photo { width: 180px !important; height: 180px !important; }
}
`;

export default function AboutSection() {
    return (
        <section
            id="about"
            className="about-section"
            style={{ padding: '60px 32px 80px', maxWidth: '1100px', margin: '0 auto' }}
        >
            <style dangerouslySetInnerHTML={{ __html: responsiveCSS }} />

            <div className="section-label" style={{ marginBottom: '14px' }}>
                <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                        strokeLinecap="round"
                    />
                </svg>
                자기소개
            </div>

            <h2
                className="about-heading"
                style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    marginBottom: '52px',
                }}
            >
                About Me
            </h2>

            <div
                className="about-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '220px 1fr',
                    gap: '64px',
                    alignItems: 'flex-start',
                }}
            >
                <div className="about-left-col">
                    <div
                        className="about-photo"
                        style={{ position: 'relative', width: '220px', height: '220px' }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                inset: '-3px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #7F77DD, #1D9E75)',
                                opacity: 0.7,
                            }}
                        />
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                background: 'var(--surface)',
                                border: '3px solid var(--bg)',
                            }}
                        >
                            <Image
                                src="/me01.jpg"
                                alt="구채은"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div
                        className="about-stats-wrap"
                        style={{
                            marginTop: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="about-stat-card"
                                style={{
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '10px',
                                    padding: '16px 18px',
                                    textAlign: 'center',
                                    width: '220px',
                                }}
                            >
                                <div
                                    style={{
                                        color: s.color,
                                        fontSize: '1.8rem',
                                        fontWeight: 800,
                                        lineHeight: 1,
                                    }}
                                >
                                    {s.num}
                                </div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        color: 'var(--muted)',
                                        marginTop: '4px',
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {s.unit}
                                </div>
                                <div
                                    style={{
                                        fontSize: '12px',
                                        color: 'var(--muted)',
                                        marginTop: '2px',
                                    }}
                                >
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px',
                            marginBottom: '32px',
                        }}
                    >
                        {tags.map((t) => (
                            <span
                                key={t.label}
                                style={{
                                    fontSize: '12px',
                                    padding: '5px 12px',
                                    borderRadius: '20px',
                                    background: t.bg,
                                    color: t.color,
                                    fontWeight: 600,
                                }}
                            >
                                {t.label}
                            </span>
                        ))}
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            marginBottom: '36px',
                        }}
                    >
                        {bioCards.map((card) => (
                            <div
                                key={card.title}
                                style={{
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '12px',
                                    padding: '18px 20px',
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <div
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: card.iconBg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    {card.icon}
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 700,
                                            color: 'var(--text)',
                                            margin: '0 0 4px',
                                        }}
                                    >
                                        {card.title}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--text2)',
                                            lineHeight: 1.7,
                                            margin: 0,
                                        }}
                                    >
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
                        className="flex justify-center md:justify-start"
                    >
                        <a
                            href="/구채은_이력서.pdf"
                            download="구채은_이력서.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            이력서 다운로드
                        </a>
                        <a href="#contact" className="btn-secondary">
                            연락하기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
