'use client';

// 1. 각 스킬 그룹의 구조를 정의하는 인터페이스
interface SkillGroup {
    label: string;
    icon: string;
    items: string[];
    accent?: boolean; // 강조 여부 (선택 사항)
}

// 2. 데이터 정의 (accent 속성을 추가하여 타입 에러 방지)
const skillGroups: SkillGroup[] = [
    {
        label: '핵심 개발 역량',
        icon: '💻',
        items: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'jQuery'],
        accent: true, // 주력 기술 강조
    },
    {
        label: '스타일링 & UI',
        icon: '🎨',
        items: ['Tailwind CSS', 'SCSS', 'CSS', 'HTML', 'MUI', 'Bootstrap'],
        accent: false,
    },
    {
        label: '상태 관리 & 데이터',
        icon: '🗄️',
        items: ['React Query', 'Zustand', 'Redux'],
        accent: false,
    },
    {
        label: '애니메이션 & 인터랙션',
        icon: '✨',
        items: ['GSAP', 'Framer Motion', 'React Bits'],
        accent: false,
    },
    {
        label: '디자인',
        icon: '🖌️',
        items: ['Figma', 'Photoshop', 'Illustrator', 'After Effects'],
        accent: false,
    },
    {
        label: '개발 도구 및 환경',
        icon: '🚀',
        items: ['Vite', 'Vercel', 'GitHub', 'Cursor'],
        accent: false,
    },
];

export default function SkillsSection() {
    return (
        <section
            id="skills"
            style={{
                padding: '80px 32px',
                maxWidth: '1100px',
                margin: '0 auto',
            }}
        >
            {/* 섹션 레이블 */}
            <div className="section-label">✦ 주요 기술</div>

            {/* 타이틀 */}
            <h2
                style={{
                    fontFamily: "'Pretendard', sans-serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    marginBottom: '12px',
                    color: 'var(--text)',
                }}
            >
                Skills & Expertise
            </h2>

            {/* 서브타이틀 */}
            <p
                style={{
                    fontFamily: "'Pretendard', sans-serif",
                    color: 'var(--muted)',
                    fontSize: '0.95rem',
                    marginBottom: '56px',
                }}
            >
                디자인 감각을 코드로 실현하는 직무 핵심 역량입니다.
            </p>

            {/* 스킬 그리드 */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '20px',
                }}
            >
                {skillGroups.map((group) => (
                    <div
                        key={group.label}
                        className="card-hover"
                        style={{
                            background: group.accent ? 'var(--accent)' : 'var(--bg)',
                            border: `1px solid ${group.accent ? 'var(--accent)' : 'var(--border)'}`,
                            borderRadius: '16px',
                            padding: '24px 28px',
                            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        }}
                    >
                        {/* 카드 헤더 */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '18px',
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>{group.icon}</span>
                            <span
                                style={{
                                    fontFamily: "'Pretendard', sans-serif",
                                    fontSize: '0.78rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                    color: group.accent ? 'rgba(255,255,255,0.85)' : 'var(--muted)',
                                }}
                            >
                                {group.label}
                            </span>
                        </div>

                        {/* 태그들 */}
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                            }}
                        >
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    style={{
                                        fontFamily: "'Pretendard', sans-serif",
                                        fontSize: '0.82rem',
                                        fontWeight: 600,
                                        padding: '5px 14px',
                                        borderRadius: '20px',
                                        background: group.accent
                                            ? 'rgba(255,255,255,0.18)'
                                            : 'var(--tag-bg)',
                                        border: `1px solid ${
                                            group.accent
                                                ? 'rgba(255,255,255,0.25)'
                                                : 'var(--tag-border)'
                                        }`,
                                        color: group.accent ? '#fff' : 'var(--tag-text)',
                                        letterSpacing: '0.01em',
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
