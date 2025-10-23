/**
 * 이미지 경로 처리 유틸리티
 * GitHub Pages 배포 시 basePath를 고려한 이미지 경로 생성
 */

/**
 * 환경에 따라 적절한 이미지 경로를 반환합니다.
 * 개발 환경: '/images/...' 그대로 사용
 * 프로덕션 환경: Next.js의 basePath 설정을 따름
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
  
  // Next.js의 basePath 설정을 사용 (next.config.js에서 설정됨)
  // 개발 환경에서는 basePath가 없고, 프로덕션에서는 '/hashdam'이 자동으로 추가됨
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