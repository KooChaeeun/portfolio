export interface Project {
    title: string;
    description: string;
    image: string;
    Contributor: 'Solo' | 'Team';
    tags: string[];
    href: string;
    external?: boolean;
}

export const projects: Project[] = [
    {
        title: '파머사이언스코리아',
        description:
            '파머사이언스코리아 제약회사 홈페이지를 리뉴얼 했습니다. 기존의 정보 제공형 홈페이지에서 브랜드 경험 중심 사이트로 개선하여 기업 정체성을 강화했습니다. ',
        image: '/pharma-thumb.jpg',
        Contributor: 'Solo',
        tags: ['React', 'TypeScript', 'Framer-Motion', 'Gsap', 'React Router'],
        href: 'https://pharma-science.vercel.app/',
        external: true,
    },
    {
        title: '멸종위기 야생동물',
        description:
            '멸종위기 야생동물 정보 제공 및 시민 제보 서비스 사이드 프로젝트 입니다. Feature 기반 폴더 구조와 Container/ Presentational 패턴으로 관심사를 분리했습니다.',
        image: '/endangered-thumb.jpg',
        Contributor: 'Solo',
        tags: ['React', 'TypeScript', 'Gsap', 'Tailwind CSS', 'Vite'],
        href: 'https://endangered-species-chi.vercel.app/',
        external: true,
    },
];
