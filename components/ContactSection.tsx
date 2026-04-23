'use client';

export default function ContactSection() {
    return (
        <section id="contact" style={{ padding: '60px 32px 100px' }}>
            <div
                style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    padding: '60px 48px',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        width: '400px',
                        height: '400px',
                        background:
                            'radial-gradient(circle, rgba(108,92,231,0.08) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                />
                <div className="section-label" style={{ justifyContent: 'center' }}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                    </svg>
                    소통하기
                </div>
                <h2
                    style={{
                        fontSize: 'clamp(1.5rem,3vw,2.2rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        marginBottom: '16px',
                    }}
                >
                    Let's Work Together!
                </h2>
                <p
                    style={{
                        color: 'var(--muted)',
                        lineHeight: 1.8,
                        fontSize: '0.95rem',
                        maxWidth: '500px',
                        margin: '0 auto 40px',
                    }}
                >
                    제 포트폴리오를 끝까지 봐주셔서 감사합니다. 모든 연락 및 제안을 설레는 마음으로
                    기다리고 있겠습니다.
                </p>

                {/* 아이콘 5개 */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px',
                        marginBottom: '24px',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <a
                        href="https://github.com/KooChaeeun"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '52px',
                            height: '52px',
                            color: 'var(--muted)',
                            textDecoration: 'none',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.transform =
                                'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.transform =
                                'translateY(0)';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a
                        href="mailto:kcy809@naver.com"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '52px',
                            height: '52px',
                            color: 'var(--muted)',
                            textDecoration: 'none',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.transform =
                                'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.transform =
                                'translateY(0)';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </a>
                    <a
                        href="tel:+821025666833"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '52px',
                            height: '52px',
                            color: 'var(--muted)',
                            textDecoration: 'none',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.transform =
                                'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.transform =
                                'translateY(0)';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                        </svg>
                    </a>
                    <a
                        href="https://open.kakao.com/o/sihTON3e"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '52px',
                            height: '52px',
                            color: 'var(--muted)',
                            textDecoration: 'none',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.transform =
                                'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.transform =
                                'translateY(0)';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.632 1.557 4.953 3.938 6.354L4.5 21l4.563-2.4A11.17 11.17 0 0 0 12 18.5c5.523 0 10-3.477 10-7.5S17.523 3 12 3z" />
                        </svg>
                    </a>
                </div>

                {/* 바로가기 버튼 2개 */}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/augustopolonio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: '#2d67ff',
                            color: '#fff',
                            padding: '14px 30px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            fontFamily: 'inherit',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            position: 'relative',
                            zIndex: 1,
                            justifyContent: 'center',
                            width: '100%',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 12px 35px rgba(10,102,194,0.45)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <img
                            src="https://www.saramin.co.kr/favicon.ico"
                            alt=""
                            width={20}
                            height={20}
                            style={{ borderRadius: '3px' }}
                        />
                        사람인 바로가기
                    </a>
                    <a
                        href="https://www.linkedin.com/in/augustopolonio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: '#1b55f6',
                            color: '#fff',
                            padding: '14px 30px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            fontFamily: 'inherit',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            position: 'relative',
                            zIndex: 1,
                            justifyContent: 'center',
                            width: '100%',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 12px 35px rgba(10,102,194,0.45)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <img
                            src="https://www.jobkorea.co.kr/favicon.ico"
                            alt=""
                            width={20}
                            height={20}
                            style={{ borderRadius: '3px' }}
                        />
                        잡코리아 바로가기
                    </a>
                </div>
            </div>
        </section>
    );
}
