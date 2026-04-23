'use client';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const ContributorColors: Record<string, string> = { Godot: '#478cbf', Unity: '#aaaaaa' };

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            style={{ padding: '60px 32px 80px', maxWidth: '1100px', margin: '0 auto' }}
        >
            <div className="section-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                프로젝트
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '40px',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}
            >
                <div>
                    <h2
                        style={{
                            fontSize: 'clamp(1.5rem,3vw,2.2rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            marginBottom: '8px',
                        }}
                    >
                        Featured Projects
                    </h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
                        기획부터 디자인, 프론트 구현, 배포까지 작업한 프로젝트 입니다.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {projects.map((project) => (
                    <Link
                        key={project.title}
                        href={project.href}
                        target={project.external ? '_blank' : undefined}
                        rel={project.external ? 'noopener noreferrer' : undefined}
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="card-hover"
                            style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '14px',
                                overflow: 'hidden',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* Cover */}
                            <div
                                style={{
                                    position: 'relative',
                                    paddingTop: '56.25%',
                                    background: 'var(--bg2)',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease',
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform = 'scale(1.05)')
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform = 'scale(1)')
                                    }
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        right: '10px',
                                        background: 'rgba(0,0,0,0.75)',
                                        backdropFilter: 'blur(6px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '6px',
                                        padding: '4px 10px',
                                        fontSize: '0.65rem',
                                        color:
                                            ContributorColors[project.Contributor] ||
                                            'var(--text2)',
                                        fontWeight: 600,
                                    }}
                                >
                                    {project.Contributor}
                                </div>
                            </div>
                            {/* Body */}
                            <div
                                style={{
                                    padding: '20px',
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: '0.95rem',
                                        fontWeight: 700,
                                        color: 'var(--text)',
                                        marginBottom: '8px',
                                        letterSpacing: '-0.01em',
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.78rem',
                                        color: 'var(--muted)',
                                        lineHeight: 1.65,
                                        marginBottom: '16px',
                                        flex: 1,
                                    }}
                                >
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            style={{
                                                fontSize: '0.65rem',
                                                color: 'var(--accent2)',
                                                background: 'rgba(162,155,254,0.1)',
                                                border: '1px solid rgba(162,155,254,0.2)',
                                                padding: '3px 9px',
                                                borderRadius: '20px',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <p
                style={{
                    color: 'var(--muted)',
                    fontSize: '0.8rem',
                    marginTop: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                }}
            >
                프로젝트에 대해 더 자세히 알아보고 싶다면?{' '}
                <Link
                    href="https://github.com/KooChaeeun"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent2)', textDecoration: 'none' }}
                >
                    View Details →
                </Link>
            </p>
        </section>
    );
}
