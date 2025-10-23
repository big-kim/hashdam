/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 배포를 위한 정적 export 설정 (프로덕션 빌드에서만 적용)
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    // GitHub Actions에서 GITHUB_REPOSITORY 환경변수를 통해 저장소 이름 자동 감지
    // 또는 기본값으로 hashdam 사용
    basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '/hashdam',
    assetPrefix: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '/hashdam',
    // 프로덕션 빌드 시 타입스크립트와 ESLint 에러 무시
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
  images: {
    // 정적 export를 사용할 때는 이미지 최적화 비활성화
    unoptimized: process.env.NODE_ENV === 'production',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'hashdam.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // 개발 모드 최적화 및 안정성 설정
  webpack: (config, { dev, isServer }) => {
    // HMR 안정성을 위한 설정 개선
    if (dev) {
      // 파일시스템 캐시 사용으로 변경 (메모리 캐시 문제 해결)
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
      
      // HMR 최적화
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules/**', '**/.next/**'],
      };
    }
    
    // serialization 오류 방지
    config.optimization = {
      ...config.optimization,
      minimize: !dev,
    };
    
    return config;
  },
  // React Strict Mode 활성화
  reactStrictMode: true,
  
  // 서버 컴포넌트 오류 복구
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Fast Refresh 안정성 개선
    forceSwcTransforms: true,
  },
  
  // 개발 서버 안정성
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  
}

module.exports = nextConfig
