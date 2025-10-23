/**
 * 이미지 경로 처리 유틸리티
 * GitHub Pages 배포 시 basePath를 고려한 이미지 경로 생성
 */

/**
 * 환경에 따라 적절한 이미지 경로를 반환합니다.
 * 개발 환경: '/images/...' 그대로 사용
 * 프로덕션 환경: basePath를 명시적으로 추가
 * 
 * @param path - 이미지 경로 (예: '/images/logo.png' 또는 'images/logo.png')
 * @returns 환경에 맞는 완전한 이미지 경로
 */
export const getImagePath = (path: string): string => {
  // 이미 절대 경로인 경우 처리
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // 경로가 '/'로 시작하지 않으면 추가
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // 이미 basePath가 포함되어 있는지 확인
  if (normalizedPath.startsWith('/hashdam/')) {
    return normalizedPath;
  }
  
  // 프로덕션 환경에서 basePath 추가
  // process.env.NODE_ENV는 빌드 타임에 결정됨
  if (process.env.NODE_ENV === 'production') {
    // GITHUB_REPOSITORY 환경 변수가 있으면 사용, 없으면 'hashdam' 사용
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/hashdam';
    return `${basePath}${normalizedPath}`;
  }
  
  // 개발 환경에서는 basePath 없이 그대로 사용
  return normalizedPath;
};

/**
 * 여러 이미지 경로를 한 번에 처리합니다.
 * 
 * @param paths - 이미지 경로 배열
 * @returns 환경에 맞게 처리된 이미지 경로 배열
 */
export const getImagePaths = (paths: string[]): string[] => {
  return paths.map(path => getImagePath(path));
};

/**
 * 이미지 객체의 경로를 처리합니다.
 * 
 * @param imageObj - src 속성을 가진 이미지 객체
 * @returns 경로가 처리된 이미지 객체
 */
export const processImageObject = <T extends { src?: string; image?: string }>(imageObj: T): T => {
  const processed = { ...imageObj };
  
  if (processed.src) {
    processed.src = getImagePath(processed.src);
  }
  
  if (processed.image) {
    processed.image = getImagePath(processed.image);
  }
  
  return processed;
};